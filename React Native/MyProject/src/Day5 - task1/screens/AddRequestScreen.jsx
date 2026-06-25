import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { useAppContext } from '../context/AppContext';

export default function AddRequestScreen({ navigation }) {

  const { addRequest } = useAppContext();

  const [ request, setRequest ] = React.useState({
    title: '',
    category: '',
    status: '',
    priority: '',
    residentId: '',
  });

  const handleInputChange = (field, value) => {
    setRequest(prevRequest => ({
      ...prevRequest,
      [field]: value,
    }));
  }

  const handleSubmit = () => {
    addRequest(request);
    console.log('Request submitted:', request);
    navigation.goBack();
  }

  return (
    <View>
      <SectionHeader title="Add Request" />
      <View>
        <Text>Fill in the details for the new request:</Text>
      </View>
      <View>
        <TextInput placeholder="Title" value={request.title} onChangeText={(value) => handleInputChange('title', value)} />
        <TextInput placeholder="Category" value={request.category} onChangeText={(value) => handleInputChange('category', value)} />
        <TextInput placeholder="Status" value={request.status} onChangeText={(value) => handleInputChange('status', value)} />
        <TextInput placeholder="Priority" value={request.priority} onChangeText={(value) => handleInputChange('priority', value)} />
        <TextInput placeholder="Resident ID" value={request.residentId} onChangeText={(value) => handleInputChange('residentId', value)} />
      </View>

      <Button title="Submit Request" onPress={handleSubmit} />
    </View>
  )
}

export const ADD_REQUEST_SCREEN = 'AddRequest';