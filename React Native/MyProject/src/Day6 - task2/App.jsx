import { View, Text, Alert, TextInput } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';
import useDebounce from './useDebounce';
import Dialog from "react-native-dialog";
import { Dropdown } from 'react-native-element-dropdown';
import { locations, categories } from './data';

export default function App() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const [allLocations, setAllLocations] = React.useState(locations);
  const [filteredLocations, setFilteredLocations] = React.useState(locations);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  const [dialogVisible, setDialogVisible] = React.useState(false);
  const [pendingCoordinate, setPendingCoordinate] = React.useState(null);

  async function getBackgroundPermissionsAsync() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Fallback location will be used.');
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      setCurrentLocation(location);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch your location.');
    }
  }

  function getColorByCategory(category) {
    switch (category) {
      case 'atm': return 'green';
      case 'hospital': return 'red';
      case 'police station': return 'blue';
      case 'restaurant': return 'yellow';
      case 'fire station': return 'orange';
      default: return 'purple';
    }
  }
  
  React.useEffect(() => {
    getBackgroundPermissionsAsync();
  }, []);

  React.useEffect(() => {
    setFilteredLocations(
      allLocations.filter(location => 
        location.title.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        debouncedSearchQuery.toLowerCase().includes(location.category.toLowerCase()) ||
        location.category.toLowerCase().includes(debouncedSearchQuery.toLowerCase())
      )
    );
  }, [debouncedSearchQuery, allLocations]);

  const handleMapPress = (e) => {
    setPendingCoordinate(e.nativeEvent.coordinate);
    setDialogVisible(true);
  }

  const handleCategorySelect = (categoryValue) => {
    if (!pendingCoordinate) return;

    const newMarker = {
      id: String(Date.now()),
      latitude: pendingCoordinate.latitude,
      longitude: pendingCoordinate.longitude,
      title: "Custom Location",
      description: "Added by user.",
      category: categoryValue,
      pinColor: getColorByCategory(categoryValue)
    };

    setAllLocations((prev) => [...prev, newMarker]);
    setDialogVisible(false);
    setPendingCoordinate(null);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Dialog.Container visible={dialogVisible} onBackdropPress={() => setDialogVisible(false)}>
        <Dialog.Title>Select Category</Dialog.Title>
        <Dialog.Description>Please choose a choice from the menu below.</Dialog.Description>
        <Dropdown
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, marginTop: 10, width: '100%', borderRadius: 5 }}
          data={categories}
          labelField="label"
          valueField="value"
          placeholder="Select category"
          value={null}
          onChange={item => handleCategorySelect(item.value)}
          maxHeight={250}
          autoScroll={true}
          search={true}
          searchPlaceholder="Search categories..."
        />
      </Dialog.Container>

      <View style={{ position: 'absolute', top: 20, left: 10, right: 10, alignItems: 'center', zIndex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5, elevation: 3, shadowOpacity: 0.2 }}>
        <Text style={{ fontWeight: 'bold' }}>CityConnect Map App</Text>
        <Text>Find important city services near you</Text>
        <TextInput
          placeholder="Search by title or category..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, marginTop: 10, width: '100%', borderRadius: 5 }}
        />
      </View>

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation ? currentLocation.coords.latitude : 22.5352,
          longitude: currentLocation ? currentLocation.coords.longitude : 88.3450,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
        showsUserLocation
        onPress={handleMapPress}
      >
        {filteredLocations.map(location => (
          <Marker
            key={location.id}
            coordinate={{ latitude: location.latitude, longitude: location.longitude }}
            title={location.title}
            description={location.description}
            pinColor={location.pinColor}
          />
        ))}
      </MapView>

      <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0, alignItems: 'center', zIndex: 1 }}>
        <Text style={{ backgroundColor: 'white', padding: 8, borderRadius: 5, elevation: 2 }}>
          Visible Markers: {filteredLocations.length}
        </Text>
      </View>
    </SafeAreaView>
  )
}
