import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
 
import HomeStack from './homeStack';
import AboutStack from './aboutStack';
import GalleryStack from './galleryStack';
import LogoutStack from './logoutStack';

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack
    },
    About: {
        screen: AboutStack
    },
    Gallery: {
        screen: GalleryStack
    },
    Logout: {
        screen: LogoutStack
    }
});

export default createAppContainer(RootDrawerNavigator);