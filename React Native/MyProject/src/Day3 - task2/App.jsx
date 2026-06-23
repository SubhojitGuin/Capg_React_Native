import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react'
import CaptureProfile from './CaptureProfile';
import UploadID from './UploadID';

export default function App() {
  const [livePhotoCatured, setLivePhotoCatured] = useState(false);
  const [uploadedIdCard, setUploadedIdCard] = useState(false);
  const [photoUri, setPhotoUri] = useState(null);
  const [idImage, setIdImage] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Employee Verification</Text>
        <Text style={styles.message}>
          {livePhotoCatured && uploadedIdCard 
            ? "Ready to submit application" 
            : "Complete both steps below"}
        </Text>
      </View>

      <View style={styles.splitScreen}>
        <View style={styles.halfScreen}>
          <CaptureProfile setLivePhotoCatured={setLivePhotoCatured} photoUri={photoUri} setPhotoUri={setPhotoUri} />
        </View>
        <View style={[styles.halfScreen, styles.borderLeft]}>
          <UploadID setUploadedIdCard={setUploadedIdCard} idImage={idImage} setIdImage={setIdImage} />
        </View>
      </View>

      <View style={styles.footer}>
        <Button 
          title="Submit Application" 
          disabled={!livePhotoCatured || !uploadedIdCard}
          onPress={() => {
            alert('Verification Submitted Successfully!');
            setIdImage(null);
            setPhotoUri(null);
            setLivePhotoCatured(false);
            setUploadedIdCard(false);
          }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
  },
  message: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  splitScreen: {
    flex: 1,
    flexDirection: 'row',
  },
  halfScreen: {
    flex: 1,
    height: '100%',
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fafafa',
  },
})
