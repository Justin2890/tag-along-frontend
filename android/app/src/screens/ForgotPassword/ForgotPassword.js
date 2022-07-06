import { View, Text,StyleSheet, ScrollView } from 'react-native';
import React, {useState} from 'react';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput';
import { useNavigation } from '@react-navigation/native';


const ForgotPassword = () => {
    
    const [username, setUsername] = useState('');
    const navigation = useNavigation();

    const onSendPressed = () =>{
       // console.warn('onSendPress');

       // navigation.navigate('')
    }

    const onSignInPressed = () =>{
       // console.warn('onSignInPress');
        //validate user
        navigation.navigate('SignIn');
    }

  return (
    <ScrollView showsVerticalScrollIndicator ={false}>
         <View style={styles.root}>
      <Text style = {styles.title}>Reset Your Password</Text>
        <CustomInput
        placeholder="Username"
        value={username}
        setValue={setUsername}
        />

        <CustomButton text= "Send"
         onPress={onSendPressed}
         />

         <CustomButton
         text="Back to Sign in"
         onPress={onSignInPressed}
         type = "SECONDARY"
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  }
});

export default ForgotPassword