//Map Screen

import React from 'react';
import {StyleSheet,View,Text} from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import {FAB, TextInput} from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';



const MapScreen = () => {
    return (
        <View style ={styles.sectionContainer}>
            <View style ={styles.mapStyle}> 
                    <MapView
                    style ={styles.map}
                    region={{
                        latitude:40.7128,
                        longitude:-74.0060,
                        latitudeDelta:0.09,
                        longitudeDelta:0.04,
                    }}>
                        <Marker
                            description='delivery person 1'
                            coordinate={{latitude: 40.7128,longitude: -74.0060}}>
                            
                            

                        <Callout tooltip>
                            <View>
                                <View style={styles.texting}>
                                    <Text style = {styles.name}> City Hall Park</Text>
                                    
                                </View>
                            </View>
                        </Callout>
                        </Marker>
                        </MapView>
                            <View style={styles.searchBox}>
                                <GooglePlacesAutocomplete
                                placeholder='Search'
                                onPress={(data,details=null)=>{
                                    console.log(data,details);

                                }}
                                query={{key:"AIzaSyCQYSxVSPEXyCEa-7r-8ThhaqiH4YWW6oU",language:"en"}}
                                />
                            </View>



                <FAB 
                style ={styles.fab}
                icon="plus"/>
            </View> 
        </View>
    );
};


const styles = StyleSheet.create({
    sectionContainer:
    {
        flex:1
    },
    mapStyle:{
        height:'100%'
    },
    map:{
        ...StyleSheet.absoluteFillObject,
    },
    fab:{
        position: "absolute",
        right:0,
        bottom:0,
        margin:16
    },
    texting:{
        flexDirection:'row',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:15
    },
    name:{
        fontSize:15,
        marginBottom:5
    }, 
    searchBox: {
       position:"absolute",
       width:"90%",
       top:10,
       left:16,
       flexDirection:'row',
       backgroundColor:"white",
       shadowColor:"purple",
       shadowOpacity:.4, //0-1
       shadowRadius:20,
       elevation:20, //for android
       padding:3,
       borderRadius:15

      },
});

export default MapScreen