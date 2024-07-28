import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './productsrow.styles'
import { SIZES } from '../../constants'
import ProductCardView from './ProductCardView'
import { SafeAreaView } from 'react-native-safe-area-context'

const products = [1, 2, 4, 5, 6]
const ProductsRow = () => {
    return (
       <SafeAreaView style={{flex:1}}>
         <View style={{marginLeft:12}}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCardView/>}
                horizontal
                contentContainerStyle={{ columnGap: SIZES.medium }}
            />
        </View>
       </SafeAreaView>
    )
}

export default ProductsRow