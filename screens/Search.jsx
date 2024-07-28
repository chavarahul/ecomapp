import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import styles from './search.style'
import { COLORS, SIZES } from '../constants/index'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

const Search = () => {
  return (
    <SafeAreaView>
        <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name='camera-outline' style={styles.searchIcon} size={SIZES.xLarge} />
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=''
                        onPressIn={() => { }}
                        placeholder='what are u looking for'
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        < Feather name='search'  size={24} color={COLORS.lightWhite} />
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
  )
}

export default Search