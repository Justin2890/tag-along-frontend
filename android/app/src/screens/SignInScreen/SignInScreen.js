import React, {useState} from 'react';
import Logo from '../../../../../assets/images/Tag_Along.png';
import { View, Image, ImageBackground, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    //State hooks used to set the state of the user name and password text input boxes
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const navigation = useNavigation();

const onSignInPressed = () => {
  //Enables user upon button press to traverse to HomeScreen
  navigation.navigate('User');
};

const onForgotPasswordPressed = () => {
  //Enables user upon button press to traverse to ForgotPasswordScreen
  navigation.navigate('Forgot');
};

const onSignUpPress = () => {
  //Enables user upon button press to traverse to Create an account screen
navigation.navigate('SignUp');
};

const logoPressed = () => {
  //Enables user upon button press to traverse to Create an account screen
navigation.navigate('User');
};

  return (
    //component that requires a source for a background image to be displayed on the signin Screen
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>
    
    <View style={styles.root}>
    <TouchableWithoutFeedback
        onPress={logoPressed}>
      <Image 
      source={Logo} 

      style={[styles.logo,]}
      resizeMode="contain" 
      />
       </TouchableWithoutFeedback>

       {/* Allows user to see username textbox and enter data */}
      <CustomInput 
      placeholder = "Username" 
      value={username} 
      setValue={setUsername} 
      />
       {/* Allows user to see Password textbox and enter data */}
      <CustomInput 
      placeholder = "Password" 
      value={password} 
      setValue={setPassword} 
      //hides user input for privacy concerns
      secureTextEntry
      />
   {/* Displays SignIn button and captures press event*/}
      <CustomButton
       text= "Sign In"
        onPress={onSignInPressed}
        />
     {/* Displays Forgot your password button and captures press event*/}
      <CustomButton
       text= "Forgot Your Password?" 
       onPress={onForgotPasswordPressed}
       type="SECONDARY"
       />
     {/* Displays Create an account button and captures press event*/}
      <CustomButton
       text= "Create an Account" 
       onPress={onSignUpPress}
       type="SECONDARY"
       />
    </View>
    </ImageBackground>
  );
};

//Allows user to Customize visual elements of the signin Screen
const styles = StyleSheet.create({
  logo: {
    width:'70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  root:{
    alignItems: 'center',
    padding: 20,
  },
  screen:{
    width: '100%',
    height:'100%',
  }
});

export default SignInScreen