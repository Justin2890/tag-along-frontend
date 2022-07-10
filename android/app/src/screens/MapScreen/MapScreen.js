import { View, Text, ImageBackground} from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation } from '@react-navigation/native';


const MapScreen = () => {
    const navigation = useNavigation();
    const onHomePressed = () =>{
      //Enables user upon button press to traverse to Mapscreen
      navigation.navigate('Home');
    }
  return (
    <View>
      <Text>MapScreen</Text>

      <CustomButton
       text= "Head back to the homescreen" 
       onPress={onHomePressed}
       type="SECONDARY"
       />

    </View>
  )
}

export default MapScreen