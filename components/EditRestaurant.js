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
import CustomRating from "./CustomRating";


function EditRestaurant({route, navigation, ...props}) {
    const {i, r, rs} = route.params;
    const[restaurantName, setEditName] = useState(r.restaurantName);
    const[restaurantAddy, setEditAddy] = useState(r.restaurantAddy);
    const[restaurantPhone, setEditPhone] = useState(r.restaurantPhone);
    const[restaurantTags, setEditTag] = useState(r.restaurantTags);
    const[restaurantDesc, setEditDesc] = useState(r.restaurantDesc);
    const[restaurantRate, setEditRate] = useState(r.restaurantRate);
    // const[editRestaurants, setEditRestaurants] = useState(r.newRestaurants);

    function editRestaurant(){
        // let edited = [{...props.restaurants}];
        // console.log(`edited: ${edited[0]}`)
        // console.log(editName);
        // edited[i] = [{editName,editAddy,editPhone,editTag,editDesc,editRate}];
        // console.log(edited[1]);
        // props.setRestaurants(edited);
        // console.log(`restaurants: ${{...props.restaurants}}`)
        // navigation.navigate('Restaurant');

        // props.restaurants[i] = [{editName, editAddy, editPhone, editTag, editDesc, editRate}];
        console.log(props.restaurants[i]);
        let edited = props.restaurants;
        edited[i] = {restaurantName,restaurantAddy,restaurantPhone,restaurantTags,restaurantDesc,restaurantRate}
        console.log(edited[i]);
        console.log(edited);
        props.setRestaurants[edited];
        console.log(props.restaurants);
        navigation.navigate('Restaurant')
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
                    <CustomRating style={{paddingTop:0}} value={restaurantRate} onPress={(text) => setEditRate(text)}/>
                    <TouchableOpacity style={styles.button} onPress={() => {editRestaurant(); }}>
                        <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
  )
}

export default EditRestaurant