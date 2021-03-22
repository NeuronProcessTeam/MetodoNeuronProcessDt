import React from 'react'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export default function Login() {
    return (
        <ScrollView style={styles.viewBody}>
            <Image
                source={require("../../assets/logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <View style={styles.container}>
                <Text> Login Form </Text>
                <CreateAccount/>
            </View>
            <Divider style={styles.divider}/>
        </ScrollView>
    )
}


function CreateAccount(props){
    return(
        <Text 
            onPress={() => console.log("Register")}
            style={styles.register}
        >
            Aun no tienes cuenta?{" "} 
            <Text style={styles.btnRegister}>
                Registrate
            </Text>
        </Text>
        
    )
}

const styles = StyleSheet.create({
    image: {
        height: 150,
        width: "100%",
        marginBottom: 20,
        
    },

    container: {
        marginHorizontal: 40,

    },

    divider: {
        backgroundColor: "rgb(194, 187, 240)",
        margin: 20,
    },
    viewBody: {
        backgroundColor: "#18132a",
    },

    register:{
        marginTop: 15,
        marginHorizontal: 10,
        alignSelf: "center",

    },

    btnRegister:{
        color: 'rgb(194,187,240)',
        fontWeight: "bold",


    },
})
