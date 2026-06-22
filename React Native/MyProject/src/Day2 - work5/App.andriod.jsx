import { View ,Text,Platform} from "react-native";
 
export default function AndroidApp()
{
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text>This is an Android platform</Text>
            <Text>Current platForm {Platform.OS}</Text>
            </View>
    );
}
 