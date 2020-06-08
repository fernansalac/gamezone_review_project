import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function PhotoReview({ navigation }) {
    const [isLike, setLikes] = useState(false);
    const [isShow, setIsShow] = useState(false);

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

    return (
        <View>
            <TouchableOpacity onPress={handleChange}>
                {isLike ?
                    <Text style={styles.likeAreaBlue}>Liked</Text>
                    :
                    <Text style={styles.likeArea}>Like</Text>
                }
            </TouchableOpacity>

            <TouchableOpacity onPress={textinputToggle}>
                <Text style={styles.likeArea}>Comment</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.likeArea}>Share</Text>
            </TouchableOpacity>

            {isShow ?
                <TextInput placeholder="Add a comment..." autoFocus={true} /> : null
            }
        </View>
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
    }
})