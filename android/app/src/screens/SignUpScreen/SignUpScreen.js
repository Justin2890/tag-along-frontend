import React, {useState} from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

const navigation = useNavigation();

const onRegisterPressed = () => {
  navigation.navigate('Email');
};

const onSignInPress = () => {
  navigation.navigate('SignIn');
};
const onForgotPasswordPressed = () => {
  navigation.navigate('Forgot');
}

  return (
    <ImageBackground source ={require('./../../../../../assets/images/BG.jpeg')} style ={styles.screen}>

    <ScrollView showsHorizontalScrollIndicator={false}>

    <View style={styles.root}>


    <Text style = {styles.title}> Create an Account</Text>


      <CustomInput 
      placeholder = "Username" 
      value={username} 
      setValue={setUsername} 
      />
        <CustomInput 
      placeholder = "Email" 
      value={email} 
      setValue={setEmail} 
      />
      <CustomInput 
      placeholder = "Password" 
      value={password} 
      setValue={setPassword} 
      secureTextEntry
      />
       <CustomInput 
      placeholder = "Re-enter Password" 
      value={passwordRepeat} 
      setValue={setPasswordRepeat} 
      secureTextEntry
      />

      <CustomButton
       text= "Register"
        onPress={onRegisterPressed}
        />

      <CustomButton
       text= "Whoops, you only forgot Your Password? "
       onPress={onForgotPasswordPressed}
       type="SECONDARY"
       />
          <CustomButton
       text= "Have an Account? Sign in"
       onPress={onSignInPress}
       type="SECONDARY"
       />

    
    </View>
    
    </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  root:{
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    margin: 10,
  },
  joke:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
  screen:{
    width: '100%',
    height: '100%',
  }
});

export default SignUpScreen