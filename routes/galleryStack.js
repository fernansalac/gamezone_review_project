import { createStackNavigator } from 'react-navigation-stack';
import Gallery from '../mycomponents/gallery';
import Header from '../shared/header';
import React from 'react';
import Imageinfo from '../mycomponents/imageinfo';

const screens = {
    Gallery: {
        screen: Gallery,
        navigationOptions: ({navigation}) => {
            return{
                headerTitle: () => <Header navigation={navigation} title='Gallery' />,
            }
        }
    },
    Imageinfo: {
        screen: Imageinfo,
        navigationOptions: {
            title: 'Image Information Page',
           // headerStyle: { backgroundColor: '#25cf52' }
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