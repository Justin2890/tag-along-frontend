
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ImageBackground,TextInput,TouchableOpacity } from 'react-native';



export default function App() {
    return (
            <ImageBackground source={require('./BG_image/BG.jpeg')} style = {styles.container}>
            <Text style={styles.welcome}>Login To Meet new People</Text>
            <View style = {styles.inner}>
            
            <TextInput style={styles.input} placeholder ="Username"/>
            <TextInput style={styles.input} placeholder ="Password" secureTextEntry/>

            
            <View style = {styles.button_Containter}>
            <TouchableOpacity style={styles.userButton}>
                <Text style={styles.bottom_Text}>
                    Login
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.userButton}>
                <Text style={styles.bottom_Text}>
                    Register
                </Text>
            </TouchableOpacity>
            </View>
    
            </View>
            </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    //Change the Background box around the login
    inner:{
        width:'90%',
        height:'50%',
        backgroundColor: 'rgba(128,128,128,.5)', //Color and Last is Transperency
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Change the settings of the actual input boxes
    input:{
    width:'90%',
    backgroundColor:'rgba(255,255,255,.9)',
    padding:15,
    marginBottom:20,
    fontSize:18
    },
    //Change the settings of the welcome / greeting message
    welcome:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:20,
        fontFamily:"monospace",
        fontSize:20,
        color:'white'
    },
    //Change the settings of the Login / Register Buttons
    userButton:{
        backgroundColor:'rgba(0,205,255,.7)',
        padding:12,
        width:'40%'
    },
    //Change the settings of the Text inside the Login / Register Buttons
    bottom_Text:{
        fontSize: 17,
        textAlign:'center',
        fontFamily:"monospace",
        fontWeight:'bold'
    },
    button_Containter:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%'
    }

});
