import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function Appbg(props) {
    return (
        <ImageBackground source={require('../assets/phone_bg.jpg')} style={styles.background}>
            <View>
                { props.children }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff'
    }
});