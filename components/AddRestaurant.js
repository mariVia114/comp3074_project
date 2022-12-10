import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, {useState} from "react";
import { Text, StyleSheet, ScrollView, Keyboard, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import * as Style from "../assets/styles";
import CustomRating from './CustomRating';


const AddRestaurant = ({navigation, ...props}) =>{
    return(
        <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{padding:20, justifyContent:'space-evenly'}}>
                    <TextInput style={[styles.input]} placeholder='Enter Name' value={props.restaurantName} onChangeText={(text) => props.setRestaurantName(text)}></TextInput>
                    <TextInput style={[styles.input]} placeholder='Enter Address...' value={props.restaurantAddy} onChangeText={(text) => props.setRestaurantAddy(text)}></TextInput>
                    <TextInput style={[styles.input]} placeholder='Phone Number...' value={props.restaurantPhone} onChangeText={(text) => props.setRestaurantPhone(text)}></TextInput>
                    <TextInput style={[styles.input]} placeholder='Tag ie;#vegan' value={props.restaurantTags} onChangeText={(text) => props.setRestaurantTags(text)}></TextInput>
                    <TextInput style={[styles.input, {height: 80} ]} placeholder='Description' value={props.restaurantDesc} onChangeText={(text) => props.setRestaurantDesc(text)}></TextInput>
                    <Text style={styles.ratingText}>Rating:  </Text>
                    <CustomRating style={{paddingTop:0}} value={props.restaurantRate} onPress={(text) => props.setRestaurantRate(text)}/>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        if(props.restaurantName===''){
                            Alert.alert('Please type something');
                        }if(props.restaurantAddy===''){
                            Alert.alert('Please type something');
                        }if(props.restaurantPhone===''){
                            Alert.alert('Please type something');
                        }if(props.restaurantTags===''){
                            Alert.alert('Please type something');
                        }if(props.restaurantDesc===''){
                            Alert.alert('Please type something');
                        }
                        else{
                            props.handleRestaurant();
                            navigation.navigate('Restaurant')
                        }
                    }}><Text style={styles.buttonText} onPress={()=> props.handleRestaurant()}>Add</Text></TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>

        </ScrollView>
    )
}

export const styles = StyleSheet.create({
    AddRestaurantContainer:{
        paddingHorizontal: 20,
        marginTop:20,
        alignItems:"center",
        justifyContent:'center',
    },
    input:{
        padding:20,
        paddingTop:20,
        marginBottom:20,
        width:'100%',
        fontSize: 15,
        color: 'black',
        fontWeight: '600',
        opacity: 0.8,
        shadowColor: Style.color,
        shadowOpacity: 0.4,
        shadowOffset: {width:0, height:4},
        shadowRadius:8,
        elevation: 5,
        backgroundColor: 'white',
        borderColor: Style.color,
        borderWidth: 2,
        borderRadius:5,
        height: 60
    },
    ratingText:{
        paddingTop:10,
        width:'100%',
        fontSize: 20,
        fontWeight: '600',
        height: 60
    },
    button:{
        backgroundColor:Style.color,
        width:'40%',
        borderRadius:100,
        justifyContent:'center',
        alignItems:'center',
        height:40,
        alignSelf:'center',
        marginTop:20
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontWeight:'700',
    },
    
})

export default AddRestaurant;