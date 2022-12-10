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
    const {i, r} = route.params;
    console.log(r)
    const[editName, setEditName] = useState(r.newRestaurantName);
    const[editAddy, setEditAddy] = useState(r.newRestaurantAddy);
    const[editPhone, setEditPhone] = useState(r.newRestaurantPhone);
    const[editTag, setEditTag] = useState(r.newRestaurantTags);
    const[editDesc, setEditDesc] = useState(r.newRestaurantDesc);
    const[editRate, setEditRate] = useState(r.newRestaurantRate);
    console.log(...props.restaurants)
    function editRestaurant(){
        let edited = [...props.restaurants];
        edited[i] = [{editName,editAddy,editPhone,editTag,editDesc,editRate}];
        props.setRestaurants(edited);
        navigation.navigate('Restaurant');
    }



  return (
    <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding:20, justifyContent:'space-evenly'}}>
                    <TextInput style={[styles.input]} placeholder='Enter Name' value={editName.toString()} onChangeText={(text)=>setEditName(text)} ></TextInput>
                    <TextInput style={[styles.input]} placeholder='Enter Address...' value={editAddy.toString()} onChangeText={(text)=>setEditAddy(text)} ></TextInput>
                    <TextInput style={[styles.input]} placeholder='Phone Number...' value={editPhone.toString()} onChangeText={(text)=>setEditPhone(text)}></TextInput>
                    <TextInput style={[styles.input]} placeholder='Tag ie;#vegan' value={editTag.toString()} onChangeText={(text)=>setEditTag(text)}></TextInput>
                    <TextInput style={[styles.input, {height: 80} ]} placeholder='Description' value={editDesc.toString()} onChangeText={(text)=>setEditDesc(text)}></TextInput>
                    <Text style={styles.ratingText}>Rating:  </Text>
                    <CustomRating style={{paddingTop:0}} value={editRate} onPress={(text) => props.setRestaurantRate(text)}/>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if(props.restaurantName===''){
                            Alert.alert('Please type something');
                        }else if(props.restaurantAddy===''){
                            Alert.alert('Please type something');
                        }else if(props.restaurantPhone===''){
                            Alert.alert('Please type something');
                        }else if(props.restaurantTags===''){
                            Alert.alert('Please type something');
                        }else if(props.restaurantDesc===''){
                            Alert.alert('Please type something');
                        }
                        else{
                            editRestaurant();
                        }}}>
                        <Text style={styles.buttonText}>Save</Text></TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
  )
}

export default EditRestaurant