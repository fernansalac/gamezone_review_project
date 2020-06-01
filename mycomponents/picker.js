import React, { useState,useEffect } from "react";
import { View, Picker, StyleSheet } from "react-native";
import axios from 'axios';

export default function MyPicker() {
    const [users, setUser] = useState([]);
    const [temp, setTemp] = useState('');
    useEffect(() => {
        alert('a');
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log(res);
                setUser(res.data);
            })

    }, []);
    return (
        <View style={styles.container}>
            <Picker
                style={styles.pickerBox}
                selectedValue={temp}
                style={{ height: 50, width: 300 }}
                onValueChange={(itemValue, itemIndex) => setTemp(itemValue)}
            >
                
                { users.map(username => (
                    <Picker.Item label={username.username} value={username.username} />
                ))}

            </Picker>
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
