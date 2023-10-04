import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import aviao from '../../../assets/images/aviao.png'
import camera from '../../../assets/images/camera.png'

export default function Header() {
    return(
        <View style={styles.divMain}>
            <Text style={styles.text}>Instagram</Text>
            <View style={styles.divSecondary}>
                <Image style={styles.image} source={ camera } />
                <Image style={styles.image} source={ aviao } />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    divMain: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 5,
        backgroundColor: "#d3d3d3",
        paddingLeft: 10,
        paddingRight: 10
    },
    
    text: {
        fontSize: 20,
    },

    divSecondary: {
        flexDirection: "row",
        gap: 20,
    },

    image: {
        width: 20,
        height: 20,
    }
})