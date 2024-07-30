import { View, Text, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './profile.style'
import { COLORS } from '../constants'
import {AntDesign,MaterialCommunityIcons,SimpleLineIcons} from '@expo/vector-icons'

const Profile = ({navigation}) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false)
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
              <View style={styles.menuWraper}>
                <TouchableOpacity onPress={()=>{}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='heart-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Orders</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='heart-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Orders</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='heart-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Orders</Text>
                   </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{}}>
                   <View style={styles.menuItem(0.2)}>
                    <MaterialCommunityIcons name='heart-outline' color={COLORS.primary} size={24}/>
                    <Text style={styles.menuText}>Orders</Text>
                   </View>
                </TouchableOpacity>
                
              </View>
            ) 
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Profile