import { createStackNavigator } from 'react-navigation-stack';
import Gallery from '../mycomponents/gallery';
import Header from '../shared/header';
import React from 'react';

const screens = {
    Gallery: {
        screen: Gallery,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Gallery' />,
            }
        }
    }
}

const GalleryStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default GalleryStack;