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
import { Ionicons } from '@expo/vector-icons';

const aboutName = 'About'
const restaurantName = 'Restaurant'

const BottomStack = createNativeStackNavigator();
function AboutStackScreen() {
  return (
    <BottomStack.Navigator>
      <BottomStack.Screen name= {aboutName} component={About} options={{ headerShown: false }}/>
      <BottomStack.Screen name= {restaurantName} component={Restaurant} />
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
  const [restaurants, setRestaurants] = useState([]);

  function handleRestaurant(){
    let newRestaurants = [{restaurantName,restaurantAddy, restaurantPhone,restaurantTags, restaurantRate,restaurantDesc}, ...restaurants]
    setRestaurants(newRestaurants);
    setRestaurantName('');
    setRestaurantAddy('');
    setRestaurantPhone('');
    setRestaurantTags('');
    setRestaurantRate('');
    setRestaurantDesc('');
  }
  return (
      <RestaurantStack.Navigator initialRouteName="Restaurant" >
        <RestaurantStack.Screen name="Restaurant" options={{ headerShown: false }}>
          {props => <Restaurant {...props} 
                      restaurants={restaurants} setRestaurants={setRestaurants} 
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
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name='AddRestaurant'>
          {props => <AddRestaurant {...props} 
                      restaurants={restaurants} 
                      setRestaurants={setRestaurants} 
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
          {props => <RestaurantDetails {...props} restaurants={restaurants} setRestaurants={setRestaurants} restaurantName={restaurantName} 
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
        </RestaurantStack.Screen>
        <RestaurantStack.Screen name='EditRestaurant'>
          {props => <EditRestaurant {...props} restaurants={restaurants} setRestaurants={setRestaurants} restaurantName={restaurantName} 
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
        </RestaurantStack.Screen>       
      </RestaurantStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === restaurantName) {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'restaurant'
                      : 'restaurant-outline'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === aboutName) {
              return (
                <Ionicons
                  name={focused ? 'information-outline' : 'information'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'black',
        })}>
        <Tab.Screen name={restaurantName} component={RestaurantStackScreen} />
        <Tab.Screen name={aboutName} component={AboutStackScreen} />
      </Tab.Navigator>    
    </NavigationContainer>
    </>
    
  );
}


