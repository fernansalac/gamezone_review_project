import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';
import axios from 'axios';

export default function HeadQuarters() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        alert('a');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                setPosts(res.data.slice(0, 100));
            })

    }, []);
    return (

        <View style={globalStyles.container}>
            <Card>
                <Text style={styles.header}>Users</Text>
            </Card>
            <ScrollView>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => (
                        //passing data between screens
                        <Card>
                            <Text style={globalStyles.titleText}>{item.username}</Text>
                        </Card>
                    )}

                />
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'coral'
    }
});
