import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch'
import styles from './productlist.styles';
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductList = () => {
    const { data, loading, error } = useFetch();

    if (loading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size={SIZES.xxLarge} />
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                numColumns={2}
                renderItem={({item})=><ProductCardView item={item}/>}
                contentContainerStyle={styles.container}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
            />
        </View>
    )
}

export default ProductList