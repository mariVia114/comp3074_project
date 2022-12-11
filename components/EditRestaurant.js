import React, {useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Keyboard,
} from "react-native";
import * as Style from "../assets/styles";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Icon
} from "@ui-kitten/components";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import {styles} from './AddRestaurant';
import { Ionicons } from '@expo/vector-icons';


function EditRestaurant({route, navigation, ...props}) {
    const {i} = route.params;
    const[restaurantName, setEditName] = useState(props.restaurants[i].restaurantName);
    const[restaurantAddy, setEditAddy] = useState(props.restaurants[i].restaurantAddy);
    const[restaurantPhone, setEditPhone] = useState(props.restaurants[i].restaurantPhone);
    const[restaurantTags, setEditTag] = useState(props.restaurants[i].restaurantTags);
    const[restaurantDesc, setEditDesc] = useState(props.restaurants[i].restaurantDesc);
    const[restaurantRate, setEditRate] = useState(props.restaurants[i].restaurantRate);

    function editRestaurant(){
        let edited = props.restaurants;
        edited[i] = {restaurantName,restaurantAddy,restaurantPhone,restaurantTags,restaurantDesc,restaurantRate}
        props.setRestaurants(edited);
        navigation.navigate('RestaurantDetails', {id: i});
    }
  return (
    <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding:20, justifyContent:'space-evenly'}}>
                    <TextInput style={[styles.input]} placeholder='Enter Name' value={restaurantName.toString()} onChangeText={(text)=>setEditName(text)} ></TextInput>
                    <TextInput style={[styles.input]} placeholder='Enter Address...' value={restaurantAddy.toString()} onChangeText={(text)=>setEditAddy(text)} ></TextInput>
                    <TextInput style={[styles.input]} placeholder='Phone Number...' value={restaurantPhone.toString()} onChangeText={(text)=>setEditPhone(text)}></TextInput>
                    <TextInput style={[styles.input]} placeholder='Tag ie;#vegan' value={restaurantTags.toString()} onChangeText={(text)=>setEditTag(text)}></TextInput>
                    <TextInput style={[styles.input, {height: 80} ]} placeholder='Description' value={restaurantDesc.toString()} onChangeText={(text)=>setEditDesc(text)}></TextInput>
                    <Text style={styles.ratingText}>Rating:  </Text>
                    {
                         <View style={styles.customRating}>      
                         {
                             [1,2,3,4,5].map((item) => {
                                 return(
                                     <TouchableOpacity activeOpacity={0.7} key={item} value={restaurantRate.toString()} onPress={(text) =>  props.setRestaurantRate(text)}>
                                         <Ionicons style={styles.starImgStyle} name= { item<= restaurantRate ? 'star' :  'star-outline'} />
                                     </TouchableOpacity>
                                 )
                             })
                         }
                     </View> 
                    }
                    {/* <CustomRating style={{paddingTop:0}} value={restaurantRate} onPress={(text) => setEditRate(text)}/> */}
                    <TouchableOpacity style={styles.button} onPress={() => {editRestaurant(); }}>
                        <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
  )
}

export default EditRestaurant
