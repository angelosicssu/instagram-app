import React from "react";
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Platform } from "react-native"
import logoInsta from '../../../assets/images/logo1.png'
import { StatusBar } from "expo-status-bar";
 
export default function Header() {
    return(
        <View style={styles.containerGeral}>

            <StatusBar backgroundColor="#fff" translucent={false} />

            <Image 
            source={ logoInsta }
            style={styles.logo}
            />

            <TextInput
            placeholder="Celular, username ou email"
            style={styles.campo}
            />

            <TextInput
            placeholder="Sua senha"
            style={styles.campo}
            />

            <View style={styles.esqueceuContainer}>
                <TouchableOpacity>
                    <Text style={styles.esqueceuText}>Esqueceu sua senha?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.loginBotao}>
                <Text style={styles.loginText}>Acessar</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    containerGeral: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 10
    },
    logo: {
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%'
    },
    campo: {
        width: 300,
        height: 42,
        backgroundColor: "#F4F3F3",
        marginBottom: 20,
        padding: 8,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        borderRadius: 5
    },
    esqueceuContainer: {
        width: 300,
        alignItems: 'flex-end'
    },
    esqueceuText: {
        color: "#399FFF"
    },
    loginBotao: {
        backgroundColor: "#399FFF",
        height: 42,
        justifyContent: "center",
        borderRadius: 5,
        marginTop: 20
    },
    loginText: {
        color: "#fff",
        width: 300,
        textAlign: "center"
    }
    
})