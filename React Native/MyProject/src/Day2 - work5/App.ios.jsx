import { View ,Text,Platform} from "react-native";
 
export default function IOSApp()
{
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>This is an iOS platform</Text>
            <Text>Current platForm {Platform.OS}</Text>
            </View>
    );
}