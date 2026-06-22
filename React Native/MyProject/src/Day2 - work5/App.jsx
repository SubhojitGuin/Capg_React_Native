import { StyleSheet, Text, View ,Platform} from 'react-native';
import AndroidApp from './App.android'
import IOSApp from './App.ios'
import useSafeAreaInsets from "react-native-safe-area-context";
 
export default function App() {
  const myinsets=useSafeAreaInsets();
    return (
         <View>
            {
                Platform.OS === 'ios' ?
                <IOSApp/> : <AndroidApp/>
            }
        </View>
    );
}

// Entrypoint - Based on the platform, provide different component