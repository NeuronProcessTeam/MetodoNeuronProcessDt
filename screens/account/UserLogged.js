import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Button} from "react-native-elements"
import { useNavigation } from "@react-navigation/native"
import { closeSession } from '../../utils/actions'


export default function UserLogged() {
const navigation = useNavigation()
    return (
        <View>
            <Text>User Logged...</Text>
            <Button
                title= "Cerrar Sesion"
                onPress= {() => {
                    closeSession()
                    navigation.navigate("home")
                    
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
