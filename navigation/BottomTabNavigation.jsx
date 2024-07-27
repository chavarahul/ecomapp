import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home,Profile,Search } from '../screens'
import {Ionicons} from '@expo/vector-icons'
import {COLORS} from '../constants/index'

const BottomTabNavigation = () => {
    const Tab = createBottomTabNavigator();

    const screenOptions = {
      tabShowLabel:false,
      tabBarHideOnKeyboard:true,
      headerShown:false,
      tabBarStyle:{
        position:"absolute",
        bottom:0,
        right:0,
        elavation:0,
        height:50
      }
    }
  return (
   <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name='Home' component={Home} options={{tabBarIcon:(focused)=>{
      return <Ionicons size={25} name={focused ? "home" :"home-outline"} color={focused? COLORS.primary : COLORS.gray}/>
      }}}/>
    <Tab.Screen name='search' component={Search} options={{tabBarIcon:(focus)=>{
      return <Ionicons size={25} name="search-sharp" color={focus?COLORS.primary:COLORS.gray}/>
    }}}/>
    <Tab.Screen name='profile' component={Profile} options={{tabBarIcon:(focused)=>{
      return <Ionicons size={25} name={focused ? "person" : "person-outline"} color={focused?COLORS.primary:COLORS.gray}/>
    }}}/>
   </Tab.Navigator>
  )
}

export default BottomTabNavigation