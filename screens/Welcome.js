import React from 'react'
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

function HomeScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('../assets/images/layouts/front.png')}
            style={styles.container}>

            <Text style={{ fontFamily: 'Acme-Regular', fontSize: 64, color: 'white' }}>
                Let’s Get Started
        </Text>
            <Text style={{ fontFamily: 'Acme-Regular', fontSize: 16, color: 'white' }}>
                Scan QR codes to get your number.
        </Text>


            <TouchableOpacity
                style={{
                    height: 50,
                    backgroundColor: '#047B2D',
                    // // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: 10,
                    // borderWidth:1,
                    // borderColor:'black',
                    marginTop: 50,
                    width: '80%',
                    alignSelf: 'center',
                }}
            >
                <Text
                    style={{
                        fontFamily: 'Montserrat',
                        fontSize: 16,
                        fontWeight: "600",
                        color: 'white',
                        textAlign: 'center',
                        paddingVertical: 14,

                    }}>
                    Get Started
          </Text>
            </TouchableOpacity>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'

    }
})

export default HomeScreen
