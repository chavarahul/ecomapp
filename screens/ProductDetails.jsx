import { View, Text, TouchableOpacity, Image } from 'react-native'
import React,{useState,useCallback} from 'react'
import { Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './productdetails.styles'
import { COLORS, SIZES } from '../constants'

const ProductDetails = ({ navigation }) => {
  const [count,setCount] = useState(1)
  const decrement = () =>{
    if(count>=1){setCount(count-1)}
  }
  return (
    <SafeAreaView style={styles.con}>
      <View style={styles.con}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionicons name='chevron-back-circle' size={30} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }}>
            <Ionicons name='heart' size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: 'https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg' }} style={styles.image} />
        <View style={styles.details}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>Product</Text>
            <View style={styles.priceWrapper}>
              <Text style={styles.price}>$ 660.88</Text>
            </View>
          </View>
          <View style={styles.ratingRow}>
            <View style={styles.rating} >
              {[1,2,3,4,5].map((item,index)=>(
                <Ionicons key={index} name='star' size={24} color={"gold"} />
              ))}
              <Text style={styles.ratingText}>(4.9)</Text>
            </View>
            <View style={styles.rating}>
              <TouchableOpacity onPress={()=>{setCount(count+1)}}>
                    <SimpleLineIcons name='plus' size={20} />
              </TouchableOpacity>
              <Text style={styles.ratingText}>{count}</Text>
              <TouchableOpacity onPress={()=>{decrement()}}>
                    <SimpleLineIcons name='minus' size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.descriptionWrapper}>
              <Text style={styles.description}>Description</Text>
              <Text style={styles.descText}>Hello Worls</Text>
          </View>
          <View style={{marginBottom:SIZES.small}}>
            <View style={styles.location}>
              <View style={{flexDirection:'row'}}>
              <Ionicons name='location-outline' size={20}/>
              <Text>  Lucknow  </Text>
              </View>
              <View style={{flexDirection:'row'}}>
              <MaterialCommunityIcons name='truck-delivery-outline' size={20}/>
              <Text>  Free Delivery  </Text>
              </View>
            </View>
          </View>
          <View style={styles.cartRow}>
            <TouchableOpacity onPress={()=>{}} style={styles.cartBtn}>
              <Text style={styles.cartTitle}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{}} style={styles.addCart}>
              <Fontisto size={20} name='shopping-bag' color={COLORS.lightWhite}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetails