import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Restaurant from './components/Restaurant';
import AddRestaurant from './components/AddRestaurant';
import { useState } from 'react';
import RestaurantDetails from './components/RestaurantDetails';

const Stack = createNativeStackNavigator();
export default function App() {
  const [restaurantName, setRestaurantName] = useState();
  const [restaurantAddy, setRestaurantAddy] = useState();
  const [restaurantPhone, setRestaurantPhone] = useState();
  const [restaurantTags, setRestaurantTags] = useState();
  const [restaurantRate, setRestaurantRate] = useState();
  const [restaurantDesc, setRestaurantDesc] = useState();
  const[restaurants, setRestaurants] = useState([]);

  function handleRestaurant(){
    let newRestaurantName = restaurantName;
    let newRestaurantAddy = restaurantAddy;
    let newRestaurantPhone = restaurantPhone;
    let newRestaurantTags = restaurantTags;
    let newRestaurantRate = restaurantRate;
    let newRestaurantDesc = restaurantDesc;
    let newRestaurants = [{newRestaurantName,newRestaurantAddy, newRestaurantPhone,newRestaurantTags, newRestaurantRate,newRestaurantDesc}, ...restaurants]
    setRestaurants(newRestaurants);
    setRestaurantName('')
    setRestaurantAddy('')
    setRestaurantPhone('')
    setRestaurantTags('')
    setRestaurantRate('')
    setRestaurantDesc('')



  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Restaurant">
          {props => <Restaurant{...props} restaurants={restaurants} setRestaurants={setRestaurants} 
                    restaurantName={restaurantName} 
                      restaurantAddy={restaurantAddy} 
                      restaurantPhone={restaurantPhone} 
                      restaurantTags={restaurantTags} 
                      restaurantRate={restaurantRate} 
                      restaurantDesc={restaurantDesc} 
                      setRestaurantName={setRestaurantName} 
                      setRestaurantAddy={setRestaurantAddy} 
                      setRestaurantPhone={setRestaurantPhone} 
                      setRestaurantTags={setRestaurantTags} 
                      setRestaurantRate={setRestaurantRate} 
                      setRestaurantDesc={setRestaurantDesc} />}
        </Stack.Screen>
        <Stack.Screen name='AddRestaurant'>
          {props => <AddRestaurant{...props} 
                      restaurantName={restaurantName} 
                      restaurantAddy={restaurantAddy} 
                      restaurantPhone={restaurantPhone} 
                      restaurantTags={restaurantTags} 
                      restaurantRate={restaurantRate} 
                      restaurantDesc={restaurantDesc} 
                      setRestaurantName={setRestaurantName} 
                      setRestaurantAddy={setRestaurantAddy} 
                      setRestaurantPhone={setRestaurantPhone} 
                      setRestaurantTags={setRestaurantTags} 
                      setRestaurantRate={setRestaurantRate} 
                      setRestaurantDesc={setRestaurantDesc} 
                      handleRestaurant={handleRestaurant}/>}
        </Stack.Screen>
        <Stack.Screen name='RestaurantDetails'>
          {props => <RestaurantDetails {...props}  />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


