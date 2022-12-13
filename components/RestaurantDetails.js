import React, {useState} from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Button,
  Share
} from "react-native";
import * as Style from "../assets/styles";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  ApplicationProvider,
  IconRegistry,
  Layout,
  Icon
} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";


const RestaurantDetails = ({route, navigation, ...props}) => {
    const {id} = route.params;
    function deleteItem(i){
      let newArr = [...props.restaurants];
      let deleted = newArr.splice(i,1);
      props.setRestaurants(newArr);
      navigation.navigate('Restaurant')

    }
    const shareMessage = () => {
      Share.share({
        // restaurant name
        message: "Restaurant Name: " + [props.restaurants[id].restaurantName,
          "\nAddress: " + props.restaurants[id].restaurantAddy, 
          "\nPhone: " + props.restaurants[id].restaurantPhone, 
          "\nTags: " + props.restaurants[id].restaurantTags,
          "\nRate: " + props.restaurants[id].restaurantRate,  
          "\nDescription: " + props.restaurants[id].restaurantDesc]
      })
        //after successful share return result
        .then((result) => console.log(result))
        //If any thing goes wrong it comes here
        .catch((errorMsg) => console.log(errorMsg));  
    }; 
   

    
    return(
        <View style={styles.restaurantContainer}>
            <View>
                      <Text style={styles.newRest}>{props.restaurants[id].restaurantName}</Text>
                      <Text style={styles.index}>Address: {props.restaurants[id].restaurantAddy}</Text>
                      <Text style={styles.index}>Phone: {props.restaurants[id].restaurantPhone}</Text>
                      <Text style={styles.index}>Tags: {props.restaurants[id].restaurantTags}</Text>
                      <Text style={styles.index}>Description: {props.restaurants[id].restaurantDesc}</Text>
                      <Text style={styles.index}>Rating: {props.restaurants[id].restaurantRate}</Text>
                        <Button onPress={shareMessage} title="Share Details" />
            </View>
            <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditRestaurant', {i: id})}>
                <IconRegistry icons={EvaIconsPack}/>
                    <ApplicationProvider {...eva} theme={eva.light}>
                    <Icon name="edit-outline" fill="white" style={{ width: 25, height: 30}}/>
                    </ApplicationProvider>
                    <Text style={styles.editButtonText}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => deleteItem(id)}>
                <IconRegistry icons={EvaIconsPack}/>
                    <ApplicationProvider {...eva} theme={eva.light}>
                    <Icon name="trash-2-outline" fill="white" style={{ width: 25, height: 30}}/>
                    </ApplicationProvider>
                    <Text style={styles.editButtonText}>Delete</Text>
            </TouchableOpacity>
            </View>
        </View>
    )

}

export const styles = StyleSheet.create({
  restaurantContainer: {
    paddingTop: 10,
    paddingHorizontal: 20,
    opacity: 0.9,
    backgroundColor: 'blanchedalmond'
  },
  heading: {
    fontSize: 30,
    fontWeight: "700",
    color: Style.color,
  },
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: Style.color,
    marginTop: 5,
    marginBottom: 5,
  },
  item: {
    marginBottom: 20,
    padding: 15,
    color: "black",
    opacity: 0.8,
    marginTop: 10,
    shadowColor: Style.color,
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
    borderLeftWidth: 15,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "white",
    width: 150,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
  },
  buttonText: {
    color: "white",
    fontSize: 32,
    fontWeight: "800",
  },
  scrollView: {
    marginBottom: 70,
  },
  restaurant: {
    flexDirection: "row",
    width: "75%",
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
    alignSelf: "center",
  },
  delete: {
    color: Style.color,
    fontWeight: "700",
    fontSize: 15,
  },
  input: {
    height: 40,
    paddingHorizontal: 20,
    width: "77%",
    fontSize: 19,
    color: "black",
    fontWeight: "600",
    opacity: 0.8,
    shadowColor: Style.color,
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
    backgroundColor: "white",
    borderColor: Style.color,
    borderWidth: 2,
    borderRadius: 5,
  },
  buttonWrapper:{
    flexDirection:'row',
    justifyContent:'space-around',
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 8,
  },
  searchButton: {
    backgroundColor: Style.color,
    alignItems: "center",
    justifyContent: 'center',
    width: 50,
    borderRadius: 5,
    height: 40,
  },
  editButton: {
    backgroundColor: Style.color,
    width: 87,
    borderRadius: 5,
    height: 30,
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 80
  },
  deleteButton: {
    backgroundColor: Style.color,
    width: 85,
    borderRadius: 5,
    height: 30,
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 65
  },
  searchButtonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 12,
  },
  editButtonText: {
    color: "white",
    fontWeight: "300",
    fontSize: 20,
    marginTop: 3
  },
  emptyRestaurantContainer: {
    alignItems: "center",
    marginTop: 240,
  },
  emptyRestaurantContainerText: {
    color: Style.color,
    fontWeight: "600",
    fontSize: 15,
  },
  formContainer: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  newRest:{
    fontSize: 25,
    fontWeight: "700",
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 10
  },
  index: {
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 10
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
  export default RestaurantDetails;
  
