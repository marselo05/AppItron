import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

import {ANIMALES} from '../data/animales'

const Animales = ( { navigation, route } ) => {

    const handleSelectCategory = (item) => {
        navigation.navigate('AnimalDetalle', { 
            id:     item.id,
            name:   item.name,
            codigo: item.codigo,
            mother: item.mother,
            father: item.father,
            animal: item.animal,
        })
    }

    return (
        <View>
            <FlatList
                data={ANIMALES}
                keyExtractor={ (item) => item.id }
                renderItem={ ({item}) => (
                    <TouchableOpacity
                        onPress={ () => handleSelectCategory( item ) }    
                    >
                        <View style={{ 
                            borderWidth: 1,
                            borderColor: "thistle",
                            borderRadius: 50,
                        }}>
                            <Text style={{color: 'black'}}>{item.name}</Text>
                            <Text style={{color: 'black'}}>{item.animal}</Text>
                        </View>
                    </TouchableOpacity>
                )} 
            />
        </View>
    )


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cdcdcd',
        alignItems: 'center',
        justifyContent: 'center',
    },
})}

export default Animales;