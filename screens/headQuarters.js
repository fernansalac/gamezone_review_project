 import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';
import axios from 'axios';

export default function HeadQuarters() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        alert('a');
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res);
            setUsers(res.data.slice(0, 100));
        })
        
      }, []);
    return (
        
        <View style={globalStyles.container}>
            <Card>
                <Text>Cristo Rey</Text>
            </Card>
            
            <FlatList
                data={users}
                renderItem={({ item }) => (
                    //passing data between screens
                        <Card>
                            <Text style={globalStyles.titleText}>{item.name}</Text>
                        </Card>
                )}

            />
        </View>
    )
}
