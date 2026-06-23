import { Button, StyleSheet, Text, View, Image } from 'react-native'
import React, { useRef, useState } from 'react'
import { CameraView, useCameraPermissions } from 'expo-camera';

export default function CaptureProfile({ setLivePhotoCatured, photoUri, setPhotoUri }) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);

  const takePhoto = async () => {
    if (cameraRef.current) {
      try {
        const photo = await cameraRef.current.takePictureAsync({
          quality: 1,
        });
        setPhotoUri(photo.uri);
        setLivePhotoCatured(true);
      } catch (error) {
        console.error("Camera capture error:", error);
      }
    }
  };

  const removePhoto = () => {
    setPhotoUri(null);
    setLivePhotoCatured(false);
  }

  if (!permission) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Loading camera...</Text>
      </View>
    );
  }
 
  if (!permission.granted) {
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Camera access is required</Text>
        <View style={styles.btnSpacer}>
          <Button title="Grant Access" onPress={requestPermission} />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.displayArea}>
        {
          photoUri ? (
            <Image source={{ uri: photoUri }} style={styles.fullMedia} />
          ) : (
            <CameraView ref={cameraRef} style={styles.fullMedia} facing="front"  />
          )
        }
      </View>

      <View style={styles.actionBlock}>
        {
          photoUri ? (
            <Button title='Remove Profile Photo' color="#d9534f" onPress={removePhoto} />
          ) : (
            <Button title='Capture Profile Photo' onPress={takePhoto} />
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    marginBottom: 8,
  },
  btnSpacer: {
    width: '90%',
  },
  displayArea: {
    flex: 1,
    width: '100%',
    overflow: 'hidden',
  },
  fullMedia: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  actionBlock: {
    padding: 12,
    backgroundColor: '#222',
  },
});
