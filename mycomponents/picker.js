import React, { useState, useEffect } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import axios from 'axios';
import Card from '../shared/cards';
import Loading from "./loading";

export default function MyPicker() {
    const [users, setUsers] = useState([]);
    const [temp, setTemp] = useState('');
    const [selectedUser, setSelectedUser] = useState({});
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                setUsers(res.data);
            })

    }, []);


    const showUserInfo = (itemValue) => {
        setLoading(true);
        setTemp(itemValue);
        //alert('a' + itemValue)
        axios.get('https://jsonplaceholder.typicode.com/users/' + itemValue)
            .then(res => {
                console.log(res);
                setSelectedUser(res.data);
                setLoading(false);
            })
    }


    return (
        <View>
            <View style={styles.container}>
                <Picker
                    style={styles.pickerBox}
                    selectedValue={temp}
                    style={{ height: 50, width: 300 }}
                    onValueChange={(itemValue) => showUserInfo(itemValue)}
                >

                    {users.map(user => (
                        <Picker.Item label={user.username} value={user.id} key={user.id}/>
                    ))}

                </Picker>
            </View>
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

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderColor: 'coral',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white'
    },
});
