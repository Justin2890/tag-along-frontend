
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import {FAB, TextInput} from 'react-native-paper';

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
     <Text style= {{fontSize: 24, alignSelf: 'center'}}> "THE CLEAN SLATE" </Text>

      <CustomButton
       text= "Map button" 
       onPress={onMapPressed}
       type = "SECONDARY"
       />
        <CustomButton
       text= "back to signin" 
       onPress={onLoginPressed}
       type = "SECONDARY"
       />
      <FAB    
                style ={styles.Settings}
                icon="plus"
                />
      <FAB 
                style ={styles.Friends}
                icon="plus"
                />
     <FAB 
                style ={styles.worldmap}
                icon="plus"
                />
    
    </View>
  );

  
};
const styles = StyleSheet.create({
Settings:{
  alignItems: "center",
  position: "absolute",
  right:20,
  bottom:-650,
  margin:16
},
worldmap:{
  alignItems: "center",
  position: "absolute",
  right: 160,
  bottom:-650,
  margin:16
},
Friends:{
  alignItems: "center",
  position: "absolute",
  right:300,
  bottom:-650,
  margin:16
},
});

export default HomeScreen