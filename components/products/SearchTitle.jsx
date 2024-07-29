import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './searchtitle.styles'

const SearchTitle = ({item}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} >
            <View style={styles.image}>
                <Image source={{uri:item.imageUrl}}  style={styles.productImage}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
            </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle