import {  Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './newrivals.styles'
import { Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto } from '@expo/vector-icons'
import { COLORS } from '../constants'
import { ProductList } from '../components'


const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionicons name='chevron-back-circle' size={30}  color={COLORS.lightWhite}/>
          </TouchableOpacity>
          <Text style={styles.heading}>Products</Text>
        </View>
        <ProductList/>
      </View>
    </SafeAreaView>
  )
}

export default NewRivals
