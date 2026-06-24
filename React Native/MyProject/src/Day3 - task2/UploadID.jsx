import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function UploadID({ setUploadedIdCard, idImages, setIdImages }) {

  async function handleImagePicker() {
    let image = await ImagePicker.launchImageLibraryAsync({
      allowsMultipleSelection: true,
      mediaTypes: ['images'],
      quality: 1,
    })

    if (!image.canceled) {
      setIdImages(image.assets.map(asset => asset.uri));
      setUploadedIdCard(true);
    }
  }

  function handleImageRemover() {
    setIdImages([]);
    setUploadedIdCard(false);
  }

  const hasImages = idImages && idImages.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        {
          hasImages ? (
            <View style={styles.imageContainer}>
              {idImages.map((idImage, index) => (
                <Image key={index} source={{ uri: idImage }} style={styles.fullMedia} />
              ))}
            </View>
          ) : (
            <View style={styles.placeholderBox}>
              <Text style={styles.placeholderText}>No ID Uploaded</Text>
            </View>
          )
        }
      </View>
      
      <View style={styles.actionBlock}>
        {
          hasImages ? (
            <Button title='Remove ID Card' color="#d9534f" onPress={handleImageRemover} />
          ) : (
            <Button title='Upload ID Card' onPress={handleImagePicker} />
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  displayArea: {
    flex: 1,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    flexWrap: 'wrap'
  },
  fullMedia: {
    flex: 1,
    width: '20%',
    height: '20%',
    resizeMode: 'cover',
  },
  placeholderBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  placeholderText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '500',
  },
  actionBlock: {
    padding: 12,
    backgroundColor: '#eee',
  },
});
