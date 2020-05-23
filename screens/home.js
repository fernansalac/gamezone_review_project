import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';
import { MaterialIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        { title: 'Zelda Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
        { title: 'Gotta Catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2' },
        { title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' }
    ]);

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                    <MaterialIcons
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                        style={{...styles.modalToggle, ...styles.modalClose}}
                    />
                    <Text>Hello from the modal</Text>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                onPress={() => setModalOpen(true)}
                style={styles.modalToggle}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    //passing data between screens
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}

            />
        </View>
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
    }
})
