import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const onMapPressed = () =>{
    //Enables user upon button press to traverse to Mapscreen
    navigation.navigate('Map');
  }
  const onLoginPressed = () =>{
    //Enables user upon button press to traverse to Loginscreen
    navigation.navigate('SignIn');
  }
  return (
    <View>
      <Text style= {{fontSize: 24, alignSelf: 'center'}}>Tag Along Homescreen *in Progress* </Text>

      <CustomButton
       text= "Click here to get to the MapScreen" 
       onPress={onMapPressed}
       type = "SECONDARY"
       />
        <CustomButton
       text= "Click here to get back to the LoginScreen" 
       onPress={onLoginPressed}
       type = "SECONDARY"
       />


    
    </View>
  );

  
};

export default HomeScreen