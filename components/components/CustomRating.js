import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import React, {useState} from "react";
import { Text, StyleSheet, ScrollView, Keyboard, TextInput, View, TouchableOpacity, Image, Alert } from "react-native";
import * as Style from "../assets/styles";
import {styles} from "./Restaurant";


    
    const CustomRating = () =>{

        const [defaultRating, setDefaultRating] = useState(2)
    const [maxRating, setMaxRating] = useState([1,2,3,4,5])
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner =  'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
        return(
            <View style={styles.customRating}>
                {
                    maxRating.map((item, key) => {
                        return(
                            <TouchableOpacity activeOpacity={0.7} key={item} onPress={() => setDefaultRating(item)}>
                                <Image style={styles.starImgStyle} source={item<=defaultRating ? {uri:starImgFilled} : {uri:starImgCorner}}/>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }

    export default CustomRating;