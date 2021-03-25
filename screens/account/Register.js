import React from 'react'
import {ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import RegisterForm from '../../components/account/RegisterForm'

import { KeyboardAwareSectionList } from 'react-native-keyboard-aware-scroll-view'

export default function Register() {
    return (
        <ScrollView
             style={styles.viewBody}> 
            <Image
                source={require("../../assets/logo.png")}
                resizeMode="contain"
                style={styles.imagen}
            />
            <RegisterForm/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        backgroundColor: "#18132a",

    },
    imagen: {
        height: 300,
        width: "100%",
        marginBottom: 10,

    }
})
