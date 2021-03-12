import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon } from 'react-native-elements'


import AgendaStack from './AgendaStack'
import HomeStack from './HomeStack'
import AccountStack from './AccountStack'
import VoteStack from './VoteStack'



const Tab = createBottomTabNavigator()

export default function Navigation() {


    return (
        <NavigationContainer>
            <Tab.Navigator>
            
            <Tab.Screen 
                    name="Home"
                    component={HomeStack}
                    options={{title: "Home"}}
                    />
                 
                 <Tab.Screen 
                    name="Encuesta"
                    component={VoteStack}
                    options={{title: "Votar"}}
                    />
                    
                 <Tab.Screen 
                    name="Agenda"
                    component={AgendaStack}
                    options={{title: "Agenda"}}
                    />
                   
                 <Tab.Screen 
                    name="Profile"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
