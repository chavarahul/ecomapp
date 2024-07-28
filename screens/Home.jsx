import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './home.style'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { Welcome } from '../components'
import Carousel from '../components/home/Carousel'
import Headings from '../components/home/Headings'
import ProductsRow from '../components/products/ProductsRow'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={styles.appBarWraper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={25} />
          <Text style={styles.location}>Hyderabad</Text>
          <View style={{ alignItems: 'flex-end' }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={21} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ paddingBottom: 70}}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home