import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons'
import { COLORS, SIZES } from '../constants'

const BackBtn = ({onPress}) => {
  return (
   <TouchableOpacity onPress={onPress}>
     <Ionicons  name='chevron-back-circle' size={30} color={COLORS.primary} style={styles.btn}/>
   </TouchableOpacity>
  )
}

export default BackBtn

const styles = StyleSheet.create({
    btn:{
        alignItems:'center',
        position:'absolute',
        zIndex:999,
        top:SIZES.large - 10
    }
})