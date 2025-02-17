import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const Button = ({title,onPress,isValid,loader}) => {
  return (
   <TouchableOpacity onPress={onPress} style={styles.btnStyle(isValid ===false ?  COLORS.gray : COLORS.primary)}>
        {
            loader === false ? (
                <Text style={styles.btnText}>{title}</Text>
            ) : (
                <ActivityIndicator size={20} color={COLORS.gray}/>
            )
        }
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    btnText:{
        fontFamily:'bold',
        color:COLORS.white,
        fontSize:18,
    },
    btnStyle:(backgroundColor)=>({
        height:50,
        width:'100%',
        marginVertical:20,
        backgroundColor:backgroundColor,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    })
})