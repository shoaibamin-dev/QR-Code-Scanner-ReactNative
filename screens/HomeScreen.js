import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function HomeScreen() {
    return (
        <ImageBackground
      source={require('../assets/images/layouts/front.png')}
      style={styles.container}>
        <View style={styles.container}>

            <Input
                placeholder='Name'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
            <Input
                placeholder='Email'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
            />
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default HomeScreen
