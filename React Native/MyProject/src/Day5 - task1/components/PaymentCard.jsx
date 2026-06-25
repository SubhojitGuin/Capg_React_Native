import { View, Text } from 'react-native'
import React from 'react'

export default function PaymentCard({ payment }) {
  return (
    <View>
      <Text>{payment.amount}</Text>
      <Text>Due Date: {payment.dueDate}</Text>
      <Text>Status: {payment.status}</Text>
      <Text>Resident Id: {payment.residentId}</Text>
    </View>
  )
}