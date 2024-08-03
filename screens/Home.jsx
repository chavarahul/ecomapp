
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './home.style';
import { Ionicons, Fontisto } from '@expo/vector-icons';
import { Welcome } from '../components';
import Carousel from '../components/home/Carousel';
import Headings from '../components/home/Headings';
import ProductsRow from '../components/products/ProductsRow';
import { checkExistingUser } from '../hooks/checkUser';

const Home = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);

  useEffect(() => {
    const getUserData = async () => {
      const user = await checkExistingUser();
      if (user) {
        setUserData(user);
        setUserLogin(true);
      } else {

        navigation.navigate('Login') 
      }
    };

    getUserData();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.appBarWraper}>
        <View style={styles.appBar}>
          <Ionicons name='location-outline' size={25} />
          <Text style={styles.location}>{userData && userData.location}</Text>
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
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <Welcome />
        <Carousel />
        <Headings />
        <ProductsRow />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
