import { View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { useAppContext } from '../context/AppContext';

export default function EditProfileScreen({ navigation }) {

  const { profile, editProfile } = useAppContext();
  const [ updatedProfile, setUpdatedProfile ] = React.useState(profile);

  const handleInputChange = (field, value) => {
    setUpdatedProfile(prevProfile => ({
      ...prevProfile,
      [field]: value,
    }));
  }

  const handleSubmit = () => {
    editProfile(updatedProfile);
    console.log('Profile updated:', updatedProfile);
    navigation.goBack();
  }

  return (
    <View>
      <SectionHeader title="Edit Profile" />
      <View>
        <TextInput placeholder="Name" value={updatedProfile.name} onChangeText={(value) => handleInputChange('name', value)} />
        <TextInput placeholder="Flat No" value={updatedProfile.flatNo} onChangeText={(value) => handleInputChange('flatNo', value)} />
        <TextInput placeholder="Phone" value={updatedProfile.phone} onChangeText={(value) => handleInputChange('phone', value)} />
        <TextInput placeholder="Email" value={updatedProfile.email} onChangeText={(value) => handleInputChange('email', value)} />
      </View>
      <View>
        <Button title="Save Changes" onPress={handleSubmit} />
      </View>
    </View>
  )
}

export const EDIT_PROFILE_SCREEN = 'EditProfile';