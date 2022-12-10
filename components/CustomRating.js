import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, {useState} from "react";
import { Text, StyleSheet, ScrollView, Keyboard, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import * as Style from "../assets/styles";
import {styles} from "./Restaurant";
import { Ionicons } from '@expo/vector-icons';


    
const CustomRating = () =>{

    const [defaultRating, setDefaultRating] = useState(2)
const [maxRating, setMaxRating] = useState([1,2,3,4,5])
    return(      
        <View style={rating.customRating}>      
            {
                maxRating.map((item) => {
                    return(
                        <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
                            <Ionicons style={rating.starImgStyle} name= { item<=defaultRating ? 'star' :  'star-outline'} />
                        </TouchableOpacity>
                    )
                })
            }
        </View> 
       
    )
}

const rating = StyleSheet.create ( {
    customRating:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
    },
    starImgStyle:{
        fontSize: 50,
        color: '#57e32c'
    }
})

export default CustomRating;