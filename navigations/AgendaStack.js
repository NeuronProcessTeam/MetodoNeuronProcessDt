import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import Agenda from '../screens/agenda/Agenda'

const Stack = createStackNavigator()

export default function AgendaStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
                name="Agenda"
                component={Agenda}
                options={{title: "Agenda"}} 
           />
       </Stack.Navigator>
    )
}
