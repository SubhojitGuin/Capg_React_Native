import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native';
 
import DashboardScreen from './DashboardScreen';
import ProductsScreen from './ProductsScreen';
import OrdersScreen from './OrdersScreen';
 
const Drawer =createDrawerNavigator();
 
export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator initialRouteName='Dashboard'>
      <Drawer.Screen  name='Dashboard' component={DashboardScreen}/>
      <Drawer.Screen  name='Products' component={ProductsScreen}/>
      <Drawer.Screen  name='Orders' component={OrdersScreen}/>
    </Drawer.Navigator>
   </NavigationContainer>
  )
}
 