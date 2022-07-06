import React, {useState} from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, ScrollView, useWindowDimensions} from 'react-native';
import Logo from '../../../../../assets/images/Tag_Along.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const{height} = useWindowDimensions();
const navigation = useNavigation();

const onSignInPressed = () => {
 // console.warn('Sign in');
  // validate user
  navigation.navigate('Home');
};

const onForgotPasswordPressed = () => {
  //console.warn('onForgotPasswordPressed');
  // validate user

  navigation.navigate('Forgot');
};

const onSignUpPress = () => {
 // console.warn('onSignUpPress');
  //validate user
navigation.navigate('SignUp');
};
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>

    <View style={styles.root}>

      <Image 
      source={Logo} 
      style={[styles.logo, 
      {height: height * 0.3}]} 
      resizeMode="contain" 
      />

      <CustomInput 
      placeholder = "Username" 
      value={username} 
      setValue={setUsername} 
      />
      <CustomInput 
      placeholder = "Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      />

      <CustomButton
       text= "Sign In"
        onPress={onSignInPressed}
        />

      <CustomButton
       text= "Forgot Your Password?" 
       onPress={onForgotPasswordPressed}
       type="SECONDARY"
       />

      <CustomButton
       text= "Create an Account" 
       onPress={onSignUpPress}
       type="SECONDARY"
       />
      
    </View>
    
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width:'70%',
    maxWidth: 300,
    maxHeight: 200,
  },
  
});

export default SignInScreen