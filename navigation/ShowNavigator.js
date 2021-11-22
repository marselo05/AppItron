import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Animales from '../screens/Animales'
import AnimalDetalle from '../screens/AnimalDetalle'

const Stack = createNativeStackNavigator()

const ShowNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home"> 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Animales" component={Animales} />
            <Stack.Screen name="AnimalDetalle" component={AnimalDetalle} />
        </Stack.Navigator>    
    </NavigationContainer>
)

export default ShowNavigator;