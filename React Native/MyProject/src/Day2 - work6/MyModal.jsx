import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyModal() {

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <View>
      <Button title="Show Modal" onPress={() => setModalVisible(true)} />
      <Modal 
        visible={modalVisible} 
        onRequestClose={() => setModalVisible(false)}
      >
        <View>
          <Text>This is a modal</Text>
          <Button title="Hide Modal" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({})