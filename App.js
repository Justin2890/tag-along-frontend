/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, ImageBackground, Text} from 'react-native';
import SignInScreen from './android/app/src/screens/SignInScreen';


const App = () => {
  const localImage = require("./assets/images/BG.jpeg");
  return (
    
    <SafeAreaView style={styles.root}>
      <ImageBackground source={localImage} style = {styles.container}>
    <SignInScreen />
    </ImageBackground>
    </SafeAreaView>
    
    
  );
};


const styles = StyleSheet.create({
root:{
  flex: 1,
  width:400,
  height:undefined,
  resizeMode:'',
  },
container:{
  flex: 1,
  width:400,
  height:undefined,
  resizeMode:'',
}
});

export default App;
