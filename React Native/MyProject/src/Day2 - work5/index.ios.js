import { AppRegistry, Platform } from "react-native";
import App from './App'

console.log('Current platform: ', Platform.OS);
AppRegistry.registerComponent('main', () => App)