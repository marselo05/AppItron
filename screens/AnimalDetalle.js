import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const AnimalDetalle = ({ navigation, route }) => {
    return (
        <View>
            <Text>Detalle</Text>
            <Text>{route.params.id}</Text>
            <Text>{route.params.name}</Text>
            <Text>{route.params.codigo}</Text>
            <Text>{route.params.mother}</Text>
            <Text>{route.params.father}</Text>
            <Text>{route.params.category}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdcdcd',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default AnimalDetalle;