import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ImageBackground } from 'react-native';

export default function Login({ setIsLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username == 'admin' && password == 'Password') {
            setIsLogin(true);
        } else {
            alert('Username and Password is incorrect! Please try again...');
        }
    }

    return (
        <ImageBackground source={require('../assets/phone_bg.jpg')} style={styles.background}>
            <View>
                <TextInput
                    value={username}
                    onChangeText={(TextValueUsername) => { setUsername(TextValueUsername) }}
                    placeholder={'Username'}
                    style={styles.input}
                />
                <TextInput
                    value={password}
                    onChangeText={(TextValuePassword) => { setPassword(TextValuePassword) }}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={handleLogin}
                />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    background: {
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    }
});