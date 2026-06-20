import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeCard from './EmployeeCard';

export default function App() {
  return (
    <View style={styles.container}>
      <EmployeeCard name="John Doe" salary={50000}/>
      <EmployeeCard name="John Doe" salary={50000}/>
      <EmployeeCard name="John Doe" salary={50000}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // mandatory
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
