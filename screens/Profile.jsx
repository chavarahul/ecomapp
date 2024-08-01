import { View, Text, StatusBar, Image, TouchableOpacity,ScrollView, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style'
import { COLORS } from '../constants'
import {AntDesign,MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false)

  const logout = () => {
    Alert.alert(
      "Logout",
      "Are you sure want to logout",
      [
        {text:'Cancel'},
        {defaultIndex:1}
      ]
    )
  } 
  const clearCache = () => {
    Alert.alert(
      "Clear Cache",
      "Are you sure want to delete all saved data from your device",
      [
        {text:'Cancel'},
        // {text:'Continue'},
        {defaultIndex:1}
      ]
    )
  } 
  const deleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure want to delete your account",
      [
        {text:'Cancel'},
        // {text:'Continue'},
        {defaultIndex:1}
      ]
    )
  } 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.gray} />
        <View style={{ width: '100%' }}>
          <Image source={require('../assets/images/space.jpg')} style={styles.cover} />
        </View>
        <View style={styles.profileContainer}>
          <Image source={require('../assets/images/profile.jpeg')} style={styles.profile} />
          <Text style={styles.name}>{userData ? userData.name : "Login into your account"}</Text>
          {
            userLogin === false ? (
              <TouchableOpacity onPress={()=>{navigation.navigate('Login')}} >
                <View style={styles.loginBtn}>
                  <Text style={styles.menuText}>L O G I N</Text>
                </View>
              </TouchableOpacity>
            ) :(
              <View style={styles.loginBtn}>
              <Text style={styles.menuText}>{userData.email}</Text>
            </View>
            )
          }
           {
            userLogin === false && (
              <ScrollView style={styles.menuWraper} contentContainerStyle={{ paddingBottom: 70 }}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Favourites')}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='heart-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Favorites</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Orders')}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='truck-delivery-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Orders</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                   <View style={styles.menuItem(0.2)}>
                    <SimpleLineIcons name='bag' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Cart</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{clearCache()}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='cached' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Clear cache</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{deleteAccount()}}>
                   <View style={styles.menuItem(0.2)}>
                    <AntDesign name='deleteuser' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Delete Account</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{logout()}}>
                   <View style={styles.menuItem(0.2)}>
                    <AntDesign name='logout' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Logout</Text>
                   </View>
                </TouchableOpacity>
              </ScrollView>
            ) 
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile