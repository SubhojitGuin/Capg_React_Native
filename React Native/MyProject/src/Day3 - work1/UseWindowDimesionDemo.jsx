import { View,Text,StyleSheet,Image } from "react-native";
import { useWindowDimensions } from "react-native";
import React from "react";
 
 
export default function UseWinDimDemo() {
    const { width, height } = useWindowDimensions();
    const deviceType = width < 768 ? "Mobile" : width < 1024 ? "Tablet" : "Desktop";
 
    return (
        <View style={styles.container}>
            <Text style={styles.title}> Spring Sale</Text>
            <Text style={styles.info}>Width: {width}</Text>
            <Text style={styles.info}>Height: {height}</Text>
            <Text style={styles.info}>Device Type: {deviceType}</Text>
            <View style={[styles.card,
                {
                    flexDirection:deviceType==="Mobile"?"column":"row"
                }]
            }>
                <Image style={styles.image}
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd6dk_Zfc3ESlBj9dmUfnP7lXjAbX2WYc8NC3PiH5D1Q&s=10%22" }} />
                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Wireless Headphones</Text>
                    <Text style={styles.cardDescription}>Experience the freedom of wireless audio with our premium headphones.</Text>
                    <Text style={styles.cardPrice}>Price: $99.99 </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    info: {
        fontSize: 16,
        marginBottom: 5,
    },
    card: {
        width: "100%",
        backgroundColor: "#677ee5",
        borderRadius: 8,
        overflow: "hidden",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
        padding: 30,
        margin:20
    },
    cardContent: {
        padding: 15,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: "#555",
        marginBottom: 10,
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#e63946",
    },  
});