import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

//question pano nag connect ung header at ugn stack gamit ung props na pinasa sa stack components
export default function Header({ navigation, title }) {

    const openMenu = () => {
        navigation.openDrawer()
    }

    return (
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' size={28} onPress={openMenu} style={styles.icon} />
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage} />
                {/* <Image source={{uri:'https://via.placeholder.com/600/f66b97'}} style={styles.headerImage} /> */}
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'red',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },
    icon: {
        position: 'absolute',
        left: 10
    },
    headerTitle: {
        flexDirection: 'row'
    },
    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
    }
})