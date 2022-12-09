import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Restaurant from './components/Restaurant';
import AddRestaurant from './components/AddRestaurant';
import { useState } from 'react';
import RestaurantDetails from './components/RestaurantDetails';
import EditRestaurant from './components/EditRestaurant';
import About from './components/About';

  

const BottomStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name= 'About' component={About}/>
      <BottomStack.Screen name= 'Restaurant' component={Restaurant} />
    </BottomStack.Navigator>
  )
}
const RestaurantStack = createNativeStackNavigator();
function RestaurantStackScreen() {
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
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Restaurant">
          {props => 
                    <Restaurant{...props} restaurants={restaurants} setRestaurants={setRestaurants} 
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
                      setRestaurantDesc={setRestaurantDesc} />
            }
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name='AddRestaurant'>
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
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name='RestaurantDetails'>
          {props => <RestaurantDetails {...props} restaurants={restaurants} setRestaurants={setRestaurants} handleRestaurant={handleRestaurant}  />}
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name='EditRestaurant'>
          {props => <EditRestaurant {...props} restaurants={restaurants} setRestaurants={setRestaurants}  />}
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name= 'About' component={About} />
    </RestaurantStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Restaurant' component={RestaurantStackScreen} />
        <Tab.Screen name='About' component={AboutStackScreen} />
      </Tab.Navigator>    
    </NavigationContainer>
    </>
    
  );
}


