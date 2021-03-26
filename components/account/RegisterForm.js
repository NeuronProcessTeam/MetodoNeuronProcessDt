import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon} from 'react-native-elements'

export default function RegisterForm() {
    const  [ showPassword, setShowPassword ] = React.useState(false)

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
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                        type="material-community"
                        name={ showPassword ? "eye-off-outline" : "eye-outline"}
                        iconStyle={styles.icon}
                        onPress={() => setShowPassword( ! showPassword )}
                    />
                }
            />

            <Input
                containerStyle={styles.input}
                placeholder="Confirma tu password..."
                password={true}
                secureTextEntry={!showPassword}
                rightIcon={
                    <Icon
                    type="material-community"
                    name={ showPassword ? "eye-off-outline" : "eye-outline"}
                    iconStyle={styles.icon}
                    onPress={() => setShowPassword( ! showPassword )}
                    />
                }
                
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
    },

    icon:{
        color: "#D6D0CE",

    }
})
