import { size } from 'lodash'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button, Icon} from 'react-native-elements'
import { validateEmail } from '../../utils/helpers'

export default function RegisterForm() {
    const  [ showPassword, setShowPassword ] = React.useState(false)
    const [formData, setFormData] = useState(defaultFormValues())
    const [errorEmail, setErrorEmail] = useState("")
    const [errorPassword, setErrorPassword] = useState("")
    const [errorConfirm, setErrorConfirm] = useState("")

    const onChange = (e, type) =>  {
        setFormData({...formData, [type]: e.nativeEvent.text})
    }

    const registerUser = () => {
        if (!validateData()){
            return;
        }
        console.log("In Code We Trust!!")
    }

    const validateData = () => {
        setErrorEmail("")
        setErrorPassword("")
        setErrorConfirm("")

        let valid = true

        if (!validateEmail(formData.email)){
            setErrorEmail("Debes ingresar un email valido...")
            valid = false
        }

        if (size(formData.password) < 6 ){
            setErrorPassword("Tu Password debe contener al menos 6 caracteres...")
            valid = false
        }

        if(formData.password !== formData.confirm){
            setErrorConfirm("Tu Password no es igual...")
            setErrorPassword("Tu Password no es igual...")
            valid = false
        }

        return valid
    }


    return (
        <View style={styles.form}>
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu email..."
                onChange={(e) => onChange(e, "email")}
                keyboardType="email-address"
                errorMessage= {errorEmail}
                defaultValue= {formData.email}
            />
            <Input
                containerStyle={styles.input}
                placeholder="Ingresa tu password..."
                password={true}
                secureTextEntry={!showPassword}
                onChange={(e) => onChange(e, "password")}
                errorMessage={errorPassword}
                defaultValue= {formData.password}
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
                onChange={(e) => onChange(e, "confirm")}
                errorMessage={errorConfirm}
                defaultValue= {formData.confirm}
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
                onPress= {() => registerUser()}

            />

        </View>
    )
}
const defaultFormValues = () => {
    return { email : "", password : "", confirm : "" }
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
