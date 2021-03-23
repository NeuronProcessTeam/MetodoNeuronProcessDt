import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button} from 'react-native-elements'
import {} from 'react-native-keyboard-aware-scroll-view'

export default function RegisterForm() {
    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email..."
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu password..."
                password={true}
                secureTextEntry={true}
            />

            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu password..."
                password={true}
                secureTextEntry={true}
            />
            <Button
                title="Registrar Nuevo Usuario"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}

            />

        </View>
    )
}

const styles = StyleSheet.create({
    form:{
        backgroundColor: "#18132a",
        marginTop: 30,
    },
    input: {
        width: "100%"

    },
    btnContainer:{
        marginTop:20,
        width: "90%",
        alignSelf: "center",


    },
    btn:{
        backgroundColor: "rgb(194, 187, 240)",
        borderRadius: 10,



    }
})
