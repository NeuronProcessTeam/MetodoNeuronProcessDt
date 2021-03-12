import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'

export default function LogScreen() {
    return (
        <View style={styles.container}>
        <Text style={styles.texto}>Metodo Neuron</Text>
        <TextInput 
            style={styles.input} 
            placeholder='Email '
          />
        <TextInput 
            style={styles.input} 
            placeholder='Password '/>
  
          <TouchableOpacity 
            style={styles.button}>
            <Text>Aceptar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.button2}
            >
            <Text>Crear cuenta</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop:105,
        width:200,
        height:35,
        padding:7,
        borderRadius:13,
        alignItems: 'center',
        backgroundColor:'rgb(98, 191, 237)',
      },
      button2: {
        marginTop:35,
        width:200,
        height:35,
        padding:7,
        borderRadius:13,
        alignItems: 'center',
        backgroundColor:'rgb(194, 187, 240)',
      },
      input:{
        height: 40,
        borderBottomColor: '#ccc',
        borderBottomWidth:1,
        borderRightColor: '#ccc',
        borderRightWidth:1,
        backgroundColor: '#eee',
        width: "70%",
        margin:15,
        padding:5,
      },
      texto: {
        marginTop:60,
        marginBottom:170,
        fontFamily: 'Roboto',
        fontStyle: 'italic',
        fontSize:40,
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});
