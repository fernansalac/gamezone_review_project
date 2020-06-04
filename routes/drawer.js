import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
 
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import GalleryStack from './galleryStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    },
    Gallery: {
        screen: GalleryStack
    }
});

export default createAppContainer(RootDrawerNavigator);