import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../styles/global';
import HeadQuarters from './headQuarters';
import Mydatepicker from './datepicker';
import GzSwitch from '../mycomponents/gzswitch';
import MyPicker from '../mycomponents/picker';
import FlexPractice from '../junecomponent/flexpractice';
import Login from './login';
import Appbg from '../shared/appbackground';


export default function About() {
    return (
        <Appbg>
            <View style={globalStyles.container}>
                <Text style={globalStyles.pagetitle}>About Screen</Text>
                {/* <GzSwitch /> */}
                <MyPicker />
                {/* <Mydatepicker />*/}
                {/* <HeadQuarters />     */}
                {/* <FlexPractice /> */}
                {/* // login test <Login /> */}
            </View>
        </Appbg>
    )
}
