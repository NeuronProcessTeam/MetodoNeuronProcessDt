import React from 'react'
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native'

export default function Agenda() {
  return (
        <ScrollView 
          centerContent={true}
          style={styles.viewBody}>
            <Image
             source ={require('../assets/logo.png')}
             resizeMode='contain'
             styles={styles.image}
             />
            <Text style={styles.text}>BIENVENIDO SELLECIONA ALGUNA DE ELLAS</Text> 
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
})
