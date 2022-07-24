import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native';

const FriendScreen = () => {

const navigation = useNavigation();

const OnUserPressed = () => {
    navigation.navigate('User');
}

  return (
    <View>
       <Text style = {styles.title}>FriendScreen</Text>

    <CustomButton
    text = "Return to userScreen"
    onPress={OnUserPressed}/>

    </View>
  )
}

//Allows user to Customize visual elements of the create an account screen
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
  

export default FriendScreen