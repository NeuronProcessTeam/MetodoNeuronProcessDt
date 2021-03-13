import React from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import Loading from '../components/Loading'

export default function Vote() {
    return (
        <ScrollView
            centerContent={true}
            style={styles.viewBody}

        >
            <Text style={styles.text}>Vota por tu comida favorita </Text>

            <TouchableOpacity 
            style={styles.button}
            >
            <Text>Pizza</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            >
            <Text>Tacos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            >
            <Text>Menu Vegetario</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button}
            >
            <Text>Otro...</Text>
          </TouchableOpacity>


        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        backgroundColor: "#18132a",
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
