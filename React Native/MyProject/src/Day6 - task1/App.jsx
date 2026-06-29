import { View, Text, Button, Alert } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Location from 'expo-location';

const locations = [
  {
    id: 1,
    latitude: 22.5352,
    longitude: 88.3431,
    title: "HDFC Bank ATM - Harish Mukherjee Road",
    description: "10A, Harish Mukherjee Rd, Bhowanipore, Kolkata 700025. Located near the Gurudwara Sant Kutiya.",
    category: "atm",
    pinColor: "green"
  },
  {
    id: 2,
    latitude: 22.5324,
    longitude: 88.3435,
    title: "Axis Bank ATM - Harish Mukherjee Road",
    description: "Ground Floor, Hoppy Prestige, 82, Harish Mukherjee Rd, Bhowanipore, Kolkata 700025. Situated directly opposite Harish Park.",
    category: "atm",
    pinColor: "green"
  },
  {
    id: 3,
    latitude: 22.5298,
    longitude: 88.3440,
    title: "Bank of India ATM - Jatin Das Park",
    description: "135A, Harish Mukherjee Rd, Jatin Das Park, Bhowanipore, Kolkata 700026. Open 24 hours near the metro station.",
    category: "atm",
    pinColor: "green"
  },
  {
    id: 4,
    latitude: 22.5358,
    longitude: 88.3421,
    title: "SI Artemis Medical Center",
    description: "17D, Ramesh Mitra Rd, Paddapukur, Bhowanipore, Kolkata 700025. Multispecialty facility near Paddapukur.",
    category: "hospital",
    pinColor: "red"
  },
  {
    id: 5,
    latitude: 22.5412,
    longitude: 88.3436,
    title: "Samaritan Hospital",
    description: "10/4D, Elgin Rd, Sreepally, Bhowanipore, Kolkata 700020. NABH-certified multispecialty center.",
    category: "hospital",
    pinColor: "red"
  },
  {
    id: 6,
    latitude: 22.5388,
    longitude: 88.3475,
    title: "SSKM Hospital & IPGMER",
    description: "SSKM Hospital Rd, Bhowanipore, Kolkata 700020. Major state government tertiary healthcare institution.",
    category: "hospital",
    pinColor: "red"
  },
  {
    id: 7,
    latitude: 22.5287,
    longitude: 88.3454,
    title: "Bhowanipur Police Station",
    description: "42, Ashutosh Mukherjee Rd, Patuapara, Bhowanipore, Kolkata 700025. Main local precinct located near the Kalighat Metro Station.",
    category: "police station",
    pinColor: "blue"
  },
  {
    id: 8,
    latitude: 22.5221,
    longitude: 88.3486,
    title: "Kalighat Police Station",
    description: "1, Haldar Para Road, Kalighat, Kolkata 700026. Neighboring division situated just south of Bhawanipore near the Kalighat Temple.",
    category: "police station",
    pinColor: "blue"
  },
  {
    id: 9,
    latitude: 22.5342,
    longitude: 88.3278,
    title: "Alipore Police Station",
    description: "Body Guard Lines, Alipore, Kolkata 700027. Nearby division located to the west past the Tolly Nullah waterway.",
    category: "police station",
    pinColor: "blue"
  },
  {
    id: 10,
    latitude: 22.5353,
    longitude: 88.3431,
    title: "Balwant Singh Dhaba",
    description: "10b, Harish Mukherjee Rd, Bhowanipore, Kolkata 700025. Legendary 24-hour eatery famous for its Doodh Cola and Punjabi vegetarian fare.",
    category: "restaurant",
    pinColor: "yellow"
  },
  {
    id: 11,
    latitude: 22.5391,
    longitude: 88.3496,
    title: "The Country House Cafe",
    description: "4C, Allenby Rd, Sreepally, Bhowanipore, Kolkata 700020. Exquisite European-themed heritage cafe offering continental brunch and artisan coffee.",
    category: "restaurant",
    pinColor: "yellow"
  },
  {
    id: 12,
    latitude: 22.5398,
    longitude: 88.3468,
    title: "Cosy Locus Cafe and Multicuisine Restaurant",
    description: "240b, AJC Bose Rd, Sreepally, Bhowanipore, Kolkata 700025. Cozy, warm setting featuring an expansive menu of local favorites and global delicacies.",
    category: "restaurant",
    pinColor: "yellow"
  },
  {
    id: 13,
    latitude: 22.5259,
    longitude: 88.3478,
    title: "Kalighat Fire Station",
    description: "114/9/2, Hazra Road, Kalighat, Kolkata 700026. The closest operational emergency station servicing the Bhawanipore area.",
    category: "fire station",
    pinColor: "orange"
  },
  {
    id: 14,
    latitude: 22.5117,
    longitude: 88.3458,
    title: "Tollygunge Fire Station",
    description: "202, N.S.C. Bose Road, Tollygunge, Kolkata 700040. Serving the extended southern corridors and neighborhoods.",
    category: "fire station",
    pinColor: "orange"
  },
  {
    id: 15,
    latitude: 22.5539,
    longitude: 88.3533,
    title: "West Bengal Fire Service Headquarters",
    description: "13D, Mirza Ghalib Street, Park Street, Kolkata 700016. Main divisional head office and regional dispatch command center.",
    category: "fire station",
    pinColor: "orange"
  }
]

export default function App() {

  const [selectedCategory, setSelectedCategory] = React.useState(null);
  const [filteredLocations, setFilteredLocations] = React.useState(locations);
  const [currentLocation, setCurrentLocation] = React.useState(null);

  React.useEffect(() => {
    getBackgroundPermissionsAsync();
  }, []);

  async function getBackgroundPermissionsAsync() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission to access location was denied');
      return;
    }
    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation(location);
  }

  React.useEffect(() => {
    if (selectedCategory) {
      const filtered = locations.filter(location => location.category === selectedCategory);
      setFilteredLocations(filtered);
    } else {
      setFilteredLocations(locations);
    }
  }, [selectedCategory]);

  const handleAddMarker = (e) => {
    const newMarker = {
      id: filteredLocations.length + 1,
      latitude: e.nativeEvent.coordinate.latitude,
      longitude: e.nativeEvent.coordinate.longitude,
      title: "Custom Location",
      description: "Added by user.",
      category: "custom",
      pinColor: "purple"
    };

    setFilteredLocations((prev) => [...prev, newMarker]);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ position: 'absolute', top: 20, left: 0, right: 0, alignItems: 'center', zIndex: 1, backgroundColor: 'white', padding: 10, borderRadius: 5 }}>
        <Text style={{ fontWeight: 'bold' }}>CityConnect Map App</Text>
        <Text>Find important city services near you</Text>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            title="All" 
            onPress={() => setSelectedCategory(null)} 
          />
          <Button 
            title="ATM" 
            onPress={() => setSelectedCategory('atm')} 
          />
          <Button 
            title="Hospital" 
            onPress={() => setSelectedCategory('hospital')} 
          />
          <Button 
            title="Police" 
            onPress={() => setSelectedCategory('police station')} 
          />
          <Button 
            title="Food" 
            onPress={() => setSelectedCategory('restaurant')} 
          />
          <Button
            title="Fire Station" 
            onPress={() => setSelectedCategory('fire station')} 
          />
        </View>
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
        onPress={handleAddMarker}
      >
        {
          filteredLocations.map(location => (
            <Marker
              key={location.id}
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title={location.title}
              description={location.description}
              pinColor={location.pinColor}
            />
          ))
        }
      </MapView>

      <View style={{ position: 'absolute', bottom: 20, left: 0, right: 0, alignItems: 'center', zIndex: 1 }}>
        <Text style={{ backgroundColor: 'white', padding: 5, borderRadius: 5 }}>Marker Count: {filteredLocations.length}</Text>
      </View>
    </SafeAreaView>
  )
}
