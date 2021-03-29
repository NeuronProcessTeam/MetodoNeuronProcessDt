import React from 'react'
import { Dimensions } from 'react-native'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.ScrollView}>
            <Image style={styles.Image}
                source={require('../assets/image/quees.jpg')}>
                </Image>
                <Text style={styles.Titulo}>¿QUE ES EL METODO NEURON PROCESS?</Text>
                <Text style={styles.parrafo}>El metodo que hemos incubado para resolver problemas.
                Utiliza herramientas de desing thinking. Evoluciona constantemente</Text>
                
                <Image style={styles.Image}
                source={require('../assets/image/porque.jpg')}
                ></Image>
                <Text style={styles.Titulo}>¿PORQUE EL METODO NEURON PROCESS?</Text>
                <Text style={styles.parrafo}>Desarrollado para nuestra cultura por expertos en 
                procesos creativos, divertido e informal para resolver problemas</Text>
                
                
                

                <Text style={styles.Titulo}>ACERCA DE...</Text>
                <Image style={styles.Image}
                source={require('../assets/image/neuron.jpg')}></Image>
                <Text style={styles.parrafo}>Somos un grupo de jóvenes profesionales
                que busca usar el metodo Neuron para resolver tus preocupaciones
                de forma creativa</Text>
            </ScrollView>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ScrollView: {
        width: Dimensions.get('window').width,
    },
    Image: {
        width: 410,
        height: 300,
        marginTop: '5%',
        marginBottom: '10%'
    },
    Titulo: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: '5%'
    },
    parrafo: {
        fontSize: 15,
        textAlign: 'center',
        marginBottom: '4%'
    }

})
