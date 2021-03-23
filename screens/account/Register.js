import React from 'react'
import {ScrollView, StyleSheet, Text, View } from 'react-native'
import RegisterForm from '../../components/account/RegisterForm'

export default function Register() {
    return (
        <ScrollView style={styles.viewBody}> 
            <RegisterForm/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        backgroundColor: "#18132a",

    }
})
