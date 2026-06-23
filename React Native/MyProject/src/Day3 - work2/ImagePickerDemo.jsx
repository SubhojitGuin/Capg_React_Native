import { useState, useEffect } from 'react';
import { View, Button, Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
 
export default function ImagePickerDemo() {
  const [selectedImage, setSelectedImage] = useState(null);
 
  async function HandleImagePicker() {
    let myimage=await ImagePicker.launchImageLibraryAsync({
        mediaTypes:['images'],
        allowsEditing:true,
        aspect:[4,3],
        quality:1,
    })
    console.log(myimage);
    if(!myimage.canceled){
        setSelectedImage(myimage.assets[0].uri);
    }
  }
 
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Button title='Pick an Image' onPress={HandleImagePicker} />
        {
            selectedImage &&
            (
                <Image source={{uri:selectedImage}} style={styles.image} />
            )
        }
    </View>
 
  );
}
 
const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    resizeMode:'contain'
  },
});
 