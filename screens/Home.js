import React from 'react'
import {View, Button, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'

import {CATEGORIAS} from '../data/categorias' 


const Home = ( {navigation} ) => {

    const handleSelectCategory = (item) => {

        navigation.navigate('Animales', {
            name: item.title,
            itemId: item.id,
        })
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={CATEGORIAS}
                keyExtractor={ (item) => item.id }
                renderItem={ ({item}) => (
                    <TouchableOpacity
                        onPress={ () => handleSelectCategory( item ) }    
                    >
                        <Text style={ styles.card} >{item.title}</Text>
                    </TouchableOpacity>
                ) }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'red',
        padding: 10
    }
});

export default Home;