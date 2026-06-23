import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

export default function UploadID({ setUploadedIdCard, idImage, setIdImage }) {

  async function handleImagePicker() {
    let image = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!image.canceled) {
      setIdImage(image.assets[0].uri);
      setUploadedIdCard(true);
    }
  }

  function handleImageRemover() {
    setIdImage(null);
    setUploadedIdCard(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        {
          idImage ? (
            <Image source={{ uri: idImage }} style={styles.fullMedia} />
          ) : (
            <View style={styles.placeholderBox}>
              <Text style={styles.placeholderText}>No ID Uploaded</Text>
            </View>
          )
        }
      </View>
      
      <View style={styles.actionBlock}>
        {
          idImage ? (
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
  fullMedia: {
    flex: 1,
    width: '100%',
    height: '100%',
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
