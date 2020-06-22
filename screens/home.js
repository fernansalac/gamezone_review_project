import React, { useState, useEffect, useRef } from 'react';
import {
    Animated, StyleSheet, Text, View, FlatList, TouchableOpacity, Modal,
    TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';
import { MaterialIcons, Entypo, FontAwesome } from '@expo/vector-icons';
import ReviewForm from './reviewForm';
import Appbg from '../shared/appbackground';


export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        fadeIn()
    }, []);


    const [reviews, setReviews] = useState([
        { title: 'Zelda Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews]
        });
        setModalOpen(false);
    }

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 2000
        }).start();
    };

    return (
        <Appbg>
            <View style={globalStyles.container}>
                <Modal visible={modalOpen} animationType='slide'>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.modalContent}>
                            <FontAwesome
                                name="close"
                                onPress={() => setModalOpen(false)}
                                size={24}
                                style={{ ...styles.modalToggle, ...styles.modalClose }}
                                color="black"
                            />
                            <ReviewForm addReview={addReview} />
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <Entypo name="add-to-list"
                    onPress={() => setModalOpen(true)}
                    size={24} color="white"
                    style={styles.modalToggle} />
                <Card>
                    <Text style={styles.totalReview}>Total Reviews: {reviews.length}</Text>
                </Card>
                <FlatList
                    data={reviews}
                    renderItem={({ item }) => (
                        //passing data between screens
                        <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>

                            <Animated.View
                                style={[
                                    styles.fadingContainer,
                                    {
                                        opacity: fadeAnim
                                    }
                                ]}
                            >
                                <Card>
                                    <Text style={globalStyles.titleText}>{item.title}</Text>
                                </Card>
                            </Animated.View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </Appbg>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#e6d1d1',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    },
    totalReview: {
        color: "coral",
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14
    }
})
