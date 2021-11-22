import React from 'react'
import {View, Button, StyleSheet} from 'react-native'

const Home = ( {navigation} ) => {
    return(
        <View style={styles.container}>
            <Button 
                title="Listado animlaes"
                onPress={ () => {
                    navigation.navigate('Animales')
                } }
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
    }
});

export default Home;