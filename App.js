import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import Search from './src/screens/Search'


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  const {colors} = useTheme()
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if(route.name === 'suscribe'){
          iconName = 'subscriptions'
        }

        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.tabIcon,
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="suscribe" component={Suscribe} />
    </Tabs.Navigator>
  )
}

export default App = ()=>{
  return(
    
      <Navigation />

  )
 
}

export function Navigation() {

  let currentTheme = useSelector(state=>{
    return state.myDarMode
  })
  return (
 
      <NavigationContainer theme={currentTheme?customDarkTheme:customDefaultTheme}>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="search" component={Search} />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

