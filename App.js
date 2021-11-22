import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useFonts } from 'expo-font';
import AppLoading   from 'expo-app-loading';

import ShowNavigator from './navigation/ShowNavigator';

export default function App() {

    const [loaded] = useFonts({
        OpenSansBold:    require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
        OpenSansRegular: require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
    })

    if( !loaded ) return <AppLoading />

    return (
        <ShowNavigator />        
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#cdcdcd',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });
