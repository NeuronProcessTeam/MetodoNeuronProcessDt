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
   const screenOptions = (route, color) =>{
      let iconName
      switch (route.name) {
         case "Home":
            iconName="home-outline"
            break;
            case "Encuesta":
            iconName="vote-outline"
            break;
            case "Agenda":
            iconName="book-open-outline"
            break;
            case "Account":
            iconName="account-outline"
            break;
      }

      return (
         <Icon
            type="material-community"
            name={iconName}
            size={22}
            color={color}
            />
      )
   }


    return (
        <NavigationContainer>
            <Tab.Navigator
               initialRouteName="Home"
               tabBarOptions={{
                  inactiveTintColor: "rgba(119,37,148,12)",
                  activeTintColor: "#e91c77",
               }}
               screenOptions={({ route }) => ({
                  tabBarIcon: ({color}) => screenOptions(route, color)
               })}
            >
            
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
                    name="Account"
                    component={AccountStack}
                    options={{title: "Cuenta"}}
                    />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
