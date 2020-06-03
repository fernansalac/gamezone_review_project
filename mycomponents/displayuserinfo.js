import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import axios from 'axios';
import Card from '../shared/cards';
import Loading from "./loading";

export default function DisplayUserInfo({ pickerValue }) {
    const [selectedUser, setSelectedUser] = useState('');
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('https://jsonplaceholder.typicode.com/users/' + pickerValue).then(res => {
                console.log(res);
                setSelectedUser(res.data);
                alert("test value" + selectedUser); 

                setLoading(false);
            })
    }, []);
                         
    const showUserInfo = () => {

    }


    return (
        <View>
            <View>
                {isLoading
                    ? <Loading />
                    : <Card>
                        <Text>Name: {selectedUser.name}</Text>
                        <Text>Username: {selectedUser.username}</Text>
                        <Text>Email: {selectedUser.email}</Text>
                    </Card>
                }
            </View>
        </View>
    );
}

