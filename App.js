import React, { useState } from 'react';
//import to create/ use the font
import * as Font from 'expo-font';
import Home from './screens/home';
import { AppLoading } from 'expo';
import Navigator from './routes/drawer';
import Login from './screens/login';

//function that returns a registered fonts
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
});


export default function App() {
  //check if its loaded
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  if (fontsLoaded) {
    if(isLogin ==  false){
      return (
        <Login setIsLogin={setIsLogin} />
    );
    }else {
        //Navigation
        return (
          <Navigator />
        )
    }
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }

}

