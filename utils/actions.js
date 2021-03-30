import { firebaseApp } from './firebase'
import firebase from 'firebase'
require('firebase/firestore')
import { useNavigation } from "@react-navigation/native"

const db = firebase.firestore(firebaseApp)


export const isUserLogged = () => {
    let isLogged = false
    firebase.auth().onAuthStateChanged((user) => {
        user !== null && (isLogged = true)
    })
    return isLogged
}

export const getCurrentUser = () => {
    return firebase.auth().currentUser
}

export const closeSession = () => {
    return firebase.auth().signOut()
}

export const registerUser = async(email, password) => {
    const result = { statusResponse: true, error: null }
    try{
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }catch (error){
        result.error = "Este Email ya ha sido registrado"
    }
    return result
}