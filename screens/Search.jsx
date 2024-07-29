import { Image,FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import styles from './search.style'
import { COLORS, SIZES } from '../constants/index'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';
import { SafeAreaView } from 'react-native-safe-area-context'
import { SearchTitle } from '../components'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const [searchData, setSearchData] = useState([])

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://192.168.29.88:3000/api/products/search/${searchValue}`);
            setSearchData(response?.data)
        } catch (error) {
            console.log('err:', error)
        }
    }
    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' style={styles.searchIcon} size={SIZES.xLarge} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value={searchValue}
                        onChangeText={setSearchValue}
                        placeholder='what are u looking for'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn} onPress={handleSearch}>
                        < Feather name='search' size={24} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
            {
                searchData.length === 0 ? (
                  <View style={styles.imageBox}>
                    <Image  
                    source={require('../assets/images/Pose23.png')}
                    style={styles.searchImage}
                    />
                  </View>
                ):(
                    <FlatList 
                    data={searchData}
                    renderItem={({item})=> <SearchTitle item={item}/>}
                    keyExtractor={(item)=> item._id}
                    style={{marginHorizontal:12}}
                    />
                )
            }
        </SafeAreaView>
    )
}

export default Search