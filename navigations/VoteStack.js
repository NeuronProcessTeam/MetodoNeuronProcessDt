import React from 'react'
import{ createStackNavigator } from '@react-navigation/stack'
import Vote from '../screens/Vote'

const Stack = createStackNavigator()

export default function VoteStack() {
    return (
       <Stack.Navigator>
           <Stack.Screen
                name="Vote"
                component={Vote}
                options={{title: "Votar"}} 
           />
       </Stack.Navigator>
    )
}
