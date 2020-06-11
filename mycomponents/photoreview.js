import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal } from 'react-native';
import { FontAwesome, Entypo, AntDesign, EvilIcons } from '@expo/vector-icons';

export default function PhotoReview({ navigation }) {
    const [isLike, setLikes] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleChange = () => {
        // if (!isLike) {
        //     setLikes(true);
        // }else {
        //     setLikes(false)
        // }

        !isLike ? setLikes(true) : setLikes(false)

    }

    const textinputToggle = () => {
        !isShow ? setIsShow(true) : setIsShow(false)
    }

    const toggleModal = () => {
        setIsModalVisible(!isModalVisible);
    }

    return (
        <View>
            <View style={styles.container}>
                <TouchableOpacity style={styles.likeArea} onPress={handleChange}>
                    {isLike ?
                        <AntDesign name="like1" size={24} color="blue" />
                        :
                        <AntDesign name="like2" size={24} color="black" />
                    }
                </TouchableOpacity>

                <TouchableOpacity style={styles.likeArea} onPress={textinputToggle}>
                    <FontAwesome name="commenting-o" size={24} color="black" />
                    {/* <Text style={styles.likeArea}>Comment</Text> */}
                </TouchableOpacity>

                <TouchableOpacity style={styles.likeArea} onPress={toggleModal}>
                    <AntDesign name="sharealt" size={24} color="black" />
                    {/* <Text style={styles.likeArea}>Share</Text> */}
                </TouchableOpacity>
            </View>
            {isShow ?
                <TextInput style={styles.input} placeholder="Add a comment..." autoFocus={true} /> : null
            }

            <View>
                {isModalVisible ?
                    <Modal isVisible={isModalVisible}>
                        <View style={styles.modalStyle}>
                            <TouchableOpacity>
                                <Text style={styles.modalItems}>
                                    <Entypo style={styles.icon} name="facebook" size={30} color="#3B5998" />
                                Facebook
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.modalItems}>
                                    <FontAwesome name="twitter-square" size={30} color="#1DA1F2" />
                                Twitter
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Text style={styles.modalItems}>
                                    <FontAwesome name="youtube-square" size={30} color="#DD4B39" />
                                Youtube
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={toggleModal}>
                                <Text style={styles.modalFooter}>
                                    <AntDesign name="back" size={30} color="red" />
                                Cancle
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    : null
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    likeArea: {
        paddingHorizontal: 6,
        paddingTop: 8
        // fontWeight: 'bold'
    },
    likeAreaBlue: {
        padding: 10,
        fontWeight: 'bold',
        color: 'blue'
    },
    input: {
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "grey"
    },
    modalItems: {
        fontSize: 30,
        fontWeight: 'bold',
        padding: 5,
    },
    modalFooter: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'red',
        paddingHorizontal: 90,
        borderWidth: 2,
        borderColor: "red",
        alignItems: 'stretch',
        flexDirection: 'column',
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 4
    },


})