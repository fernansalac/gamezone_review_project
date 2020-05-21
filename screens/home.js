import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';

export default function Home({ navigation }) {

    const [reviews, setReviews] = useState([
        {title: 'Zelda Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1'},
        {title: 'Gotta Catch them all (again)', rating: 4, body: 'lorem ipsum', key: '2'},
        {title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3'}
    ]);

    return(
        <View style={globalStyles.container}>
            <FlatList  
                data={reviews}
                renderItem={({ item }) => (
                    //passing data between screens
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                       <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}

            />
        </View>
    )
}
