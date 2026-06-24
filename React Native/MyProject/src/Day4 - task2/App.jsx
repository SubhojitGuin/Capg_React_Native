import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ProductsScreen from './screens/ProductsScreen';
import CartScreen from './screens/CartScreen';
import OrdersScreen from './screens/OrdersScreen';
import { Provider } from 'react-redux';
import ProductStore from './Store';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={ProductStore}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Products" component={ProductsScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  )
}