import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './searchtitle.styles'
import {useNavigation} from '@react-navigation/native'

const SearchTitle = ({item}) => {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetails',{item})}>
            <View style={styles.image}>
            <Image source={{ uri: item.imageUrl }} style={styles.productImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.supplierTitle}>{item.supplier}</Text>
                <Text style={styles.supplierTitle}>{item.price}</Text>
                

            </View>
      </TouchableOpacity>
    </View>
  )
}

export default SearchTitle