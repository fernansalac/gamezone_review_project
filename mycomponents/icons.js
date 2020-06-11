import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons  } from '@expo/vector-icons';

export default function Icons() {
    return (
        <View>
            <Ionicons name="md-checkmark-circle" size={32} color="green" />
        </View>
    )
}
