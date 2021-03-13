import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'

export default function UserGuest() {
    return (
        <ScrollView
            centerContent={true}
            style={styles.viewBody}

        >
            <Image
                source ={require ("../../assets/logo.png")}
                resizeMode='contain'
                style={styles.image}
            />
            <Text style={styles.text}>Ingresa a tu cuenta y desbloquea todo el poder de NeuronProcess </Text>

            <TouchableOpacity 
            style={styles.button}
            >
            <Text>Iniciar Sesion</Text>
          </TouchableOpacity>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal: 1,
        backgroundColor: "#18132a",
    },
    image: {
        height: 300,
        width: "100%",
        marginBottom: 10,
    },
    text: {
        marginHorizontal: 30,
        marginTop: 40,
        marginBottom: 20,
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        marginTop:"20%",
        width:250,
        height:35,
        padding:7,
        borderRadius:13,
        alignItems: 'center',
        marginHorizontal: "18%",
        backgroundColor:'rgb(98, 191, 237)',
      },
})
