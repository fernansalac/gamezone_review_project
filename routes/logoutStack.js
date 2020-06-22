import { createStackNavigator } from 'react-navigation-stack';
import Logout from '../screens/logout';

const screens = {
    Logout: {
        screen: Logout
    }
}

const LogoutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee', height: 80 }
    }
});

export default LogoutStack;