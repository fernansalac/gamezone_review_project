import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { globalStyles, images } from '../styles/global';
import Card from '../shared/cards';
import FontAwesome, { SolidIcons, RegularIcons, BrandIcons } from 'react-native-fontawesome';
import Appbg from '../shared/appbackground';

export default function Imageinfo({ navigation }) {

    const pressHandler = () => {
        navigation.goBack();
    }

    return (
        <Appbg>
            <View style={globalStyles.container}>
                <Card style={styles.card}>
                    <View style={styles.container}>
                        <Image style={styles.image} source={{ uri: 'https://i.picsum.photos/id/' + navigation.getParam('id') + '/300/500.jpg' }} />
                        <View style={styles.textArea}>
                            <Text style={styles.text1}>{navigation.getParam('id')}</Text>
                            <Text style={styles.text}>{navigation.getParam('title')}</Text>
                        </View>
                    </View>
                </Card>
            </View>
        </Appbg>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        marginBottom: 20,
        width: 300,
        height: 500
        //height: 610
    },
    text: {
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    text1: {
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: 'coral'
    },
    textArea: {
        paddingTop: 20,
        marginTop: 20,
        borderTopWidth: 2,
        borderTopColor: '#eee',
        marginBottom: 20
    }
})