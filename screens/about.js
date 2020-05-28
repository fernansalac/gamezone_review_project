import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import HeadQuarters from './headQuarters';

export default function About() {
    return(
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            <HeadQuarters />
        </View>
    )
}
