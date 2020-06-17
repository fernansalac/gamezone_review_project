import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FlexPractice() {
    return (
        <View style={styles.container}>
            <View style={styles.red}></View>
            <View style={styles.yellow}></View>
            <View style={styles.green}></View>
        </View>
    )
}


const styles =  StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    red: {
        flex: 1,
        backgroundColor: 'red',
    },
    yellow: {
        flex: 2,
        backgroundColor: 'yellow',
    },
    green: {
        flex: 3,
        backgroundColor: 'green',
    }
});