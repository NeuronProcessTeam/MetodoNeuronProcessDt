import React from 'react'

import { StyleSheet, Text, Image, ScrollView} from 'react-native'

import {Button} from 'react-native-elements'



export default function Agenda() {
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
            <Text style={styles.text}> BIENVENIDO A TU TALLER NEURON PROCESS</Text>

           <Button
               buttonStyle={styles.button}
               title="Comienza aqui..."
           />

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
        color:"#fff",
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
