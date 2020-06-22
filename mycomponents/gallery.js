import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';
import axios from 'axios';
import PhotoReview from './photoreview';
import Appbg from '../shared/appbackground';



export default function Gallery({ navigation }) {
    const [photos, setPhotos] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
            console.log(res);
            setPhotos(res.data.slice(0, 100));
        })
    }, []);

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }


    return (
        <Appbg>
            <View style={globalStyles.container}>
                <Text style={globalStyles.pagetitle}>Gallery</Text>
                <ScrollView>
                    <FlatList
                        data={photos}
                        renderItem={({ item }) => (
                            //passing data between screens
                            <Card>
                                <TouchableOpacity onPress={() => navigation.navigate('Imageinfo', item)}>
                                    <View style={styles.container}>
                                        <Image style={styles.image} source={{ uri: 'https://i.picsum.photos/id/' + item.id + '/300/500.jpg' }} />
                                        {/* <Text style={styles.text}>Id: {item.id}</Text>
                                <Text style={styles.text}>Title: {item.title}</Text> */}
                                    </View>
                                </TouchableOpacity>
                                <PhotoReview />
                            </Card>
                        )}
                    />
                </ScrollView>
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
        width: 300,
        height: 300
        //height: 610
    },
    text: {
        textAlign: 'center',
        fontFamily: 'nunito-bold',
        fontSize: 18,
        color: '#333'
    },
    likeArea: {
        padding: 10,
        fontWeight: 'bold'
    },
    likeAreaBlue: {
        padding: 10,
        fontWeight: 'bold',
        color: 'blue'
    },
})