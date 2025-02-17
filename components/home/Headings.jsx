import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './heading.style'
import {Ionicons,Feather} from '@expo/vector-icons'
import {COLORS}from '../../constants/index'
import {useNavigation} from '@react-navigation/native'

const Headings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rivals</Text>
        <TouchableOpacity onPress={()=>{navigation.navigate("NewRivals")}}>
             <Ionicons name='logo-windows' size={22} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings