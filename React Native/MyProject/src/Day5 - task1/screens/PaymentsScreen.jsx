import { View, Text, FlatList } from 'react-native'
import React from 'react'
import SectionHeader from '../components/SectionHeader';
import { useAppContext } from '../context/AppContext';
import PaymentCard from '../components/PaymentCard';

export default function PaymentsScreen() {

  const { payments } = useAppContext();

  return (
    <View>
      <SectionHeader title="Payments" />

      <FlatList
        data={payments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <PaymentCard payment={item} />}
      />
    </View>
  )
}

export const PAYMENTS_SCREEN = "Payments";