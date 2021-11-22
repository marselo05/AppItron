import React from 'react'
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../screens/Home'
import Animales from '../screens/Animales'
import AnimalDetalle from '../screens/AnimalDetalle'
import {COLORS} from '../constant/colors'

const Stack = createNativeStackNavigator()

const ShowNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                headerStyle:  styles.header,
                headerTintColor: Platform.OS == 'android' ? 'white' : COLORS.primary
            }}
        > 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen 
                options={{ headerTintColor: 'black' }}
                name="Animales" component={Animales} 
                />
            <Stack.Screen 
                options={{ headerTintColor: 'black' }}
                name="AnimalDetalle" component={AnimalDetalle} 
            />
        </Stack.Navigator>    
    </NavigationContainer>
)

const styles = StyleSheet.create({
    header: {
        backgroundColor: COLORS.primary
    }
})


export default ShowNavigator;