import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import HeadQuarters from './headQuarters';
import Mydatepicker from './datepicker';
import GzSwitch from '../mycomponents/gzswitch';
import MyPicker from '../mycomponents/picker';
import Icons from '../mycomponents/icons';

export default function About() {
    return(
        <View style={globalStyles.container}>
            <Text>About Screen</Text>
            {/* <GzSwitch /> */}
            <MyPicker />
            {/* <Mydatepicker />*/}
            {/* <HeadQuarters />  */}

            <Icons />
        </View>
    )
}
