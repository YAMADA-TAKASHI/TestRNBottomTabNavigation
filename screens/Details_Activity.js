import React, { Component } from "react";
import { 
    View,
    Text
 } from "react-native";

 export default class Detail_Activity extends Component {

     static navigationOptions = {
         title: 'Details Activity',
     }

     render() {
         return(
             <View style={{ flex: 1, justfyContent: 'center', alignItems: 'center' }}>
                <Text> Details Activity Screen</Text>
             </View>
         );
     }
 }