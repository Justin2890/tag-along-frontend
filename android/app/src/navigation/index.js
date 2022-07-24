import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPassword from '../screens/ForgotPassword';
import RegistrationComplete from '../screens/RegistrationComplete';
import EmailConfirmation from '../screens/EmailConfirmation';
import MapScreen from '../screens/MapScreen';
import userProfileScreen from '../screens/userProfileScreen';
import FriendScreen from '../screens/FriendScreen';
import SettingScreen from '../screens/SettingScreen';


const Stack = createNativeStackNavigator();



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}>
         <Stack.Screen name= "SignIn" component={SignInScreen}/>
        <Stack.Screen name= "SignUp" component={SignUpScreen}/>
        <Stack.Screen name= "Register" component={RegistrationComplete}/>
        <Stack.Screen name= "Forgot" component={ForgotPassword}/>
        <Stack.Screen name= "Email" component={EmailConfirmation}/>
        <Stack.Screen name= "Home" component={HomeScreen}/>
        <Stack.Screen name= "Map" component={MapScreen}/>
        <Stack.Screen name= "User" component={userProfileScreen}/>
        <Stack.Screen name= "Friend" component={FriendScreen}/>
        <Stack.Screen name= "Setting" component={SettingScreen}/>

        
        </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Navigation