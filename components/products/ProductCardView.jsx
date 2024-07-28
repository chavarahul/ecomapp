import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './productcardview.styles'
import {Ionicons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'
import { COLORS } from '../../constants'
export default function ProductCardView() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{navigation.navigate("productDetails")}}>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image source={'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg'} style={styles.image}/>
            </View>
            <View style={styles.details}>
                  <Text style={styles.title} numberOfLines={1}>Product</Text>
                  <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                  <Text style={styles.price} numberOfLines={1}>Product</Text>
            </View>
            <TouchableOpacity style={styles.addbtn}>
                  <Ionicons name='add-circle' size={35} color={COLORS.primary} />
            </TouchableOpacity>
         </View>
    </TouchableOpacity>
  )
}