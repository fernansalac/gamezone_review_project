import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/cards';

export default function HeadQuarters() {


    return (
        <View style={globalStyles.container}>
            <Card>
                <Text>Cristo Rey</Text>
            </Card>
        </View>
    )
}
