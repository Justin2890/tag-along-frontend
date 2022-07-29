import React, { useState,Component } from 'react';
import {StyleSheet,View,Text, ScrollView, Platform,Image} from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import {FAB, } from 'react-native-paper';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
//import Geolocation from '@react-native-community/geolocation';
import Geolocation from 'react-native-geolocation-service';




export default class Map extends Component {
constructor(){
    super()
    this.state={
        lat:0,
        long:0,
        places:null
    }
}

getNewLocation(){
    const variables_lat = {latitude:this.state.lat,longitude:this.state.long}
}

componentDidMount(){
    Geolocation.getCurrentPosition(
        (position)=>{
            //to change where the map starts off
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            this.setState({lat,long})
            this.getPlaces()
            this.getNewLocation()
        },
    )
}


getPlaces(){
    const url = this.getUrlWithParameters(this.state.lat,this.state.long,1000, 'restaurant', 'AIzaSyCQYSxVSPEXyCEa-7r-8ThhaqiH4YWW6oU')
    fetch(url)
    .then((data)=>data.json())
    .then((res)=>{
        console.log(res);
        const arrayMarkers =[];
        res.results.map((element,i)=>{
            arrayMarkers.push(
                <Marker 
                key={i}
                coordinate={{
                    latitude:element.geometry.location.lat,
                    longitude:element.geometry.location.lng
                }}> 
                <Callout>
                    <View>
                        <Text>{element.name}</Text>
                        <Text>Open:{element.opening_hours.open_now? 'Yes':'No'}</Text>
                        
                    </View>
                </Callout>
                
                </Marker>
            )
        })
        this.setState({places:arrayMarkers});
    })
}

getUrlWithParameters(lat,long,radius,type,API){
const url ="https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const location =`location=${lat},${long}&radius=${radius}`;
const typeData = `&types=${type}`;
const key = `&key=${API}`;
return `${url}${location}${typeData}${key}`;

}

render(){
return(

<View style ={styles.sectionContainer}>
    
    <MapView
    style={{flex:1}}
    region={{
        latitude: this.state.lat,
        longitude: this.state.long,        
        latitudeDelta:0.09,
        longitudeDelta:0.04
    }}
    > 

<Marker 
//Person Marker
coordinate={{
    latitude: this.state.lat,
    longitude: this.state.long,}}
    draggable = {true}
    onDragStart = {(e) => {
        console.log("Start",e.nativeEvent.coordinates)
    }}
    onDragEnd = {(e)=>{
        console.log("Drag End",e.nativeEvent.coordinate);
        
    }}
    >
        <View>
            <Image style = {styles.man} source ={require("./../../../../../assets/images/person.png")}/>
        </View>
        
    </Marker>
    
    <Circle 
    center = {{latitude:this.state.lat,longitude:this.state.long}}
    radius ={400}
    fillColor ={'rgba(200,300,200,0.5)'}
    
    />
    {this.state.places}
    </MapView>

</View>
);
}
}





// Styling 
const styles = StyleSheet.create({
    // Filling the entire page with just the map
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
    // Fab styling
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
    //Search Bar Styling
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
      scroll_view:{
        position:'absolute',
        paddingHorizontal:10
      }
      ,
      man:{
        width:50,
        height:50,
        resizeMode:"contain",
        alignSelf:"center"

      }
});
