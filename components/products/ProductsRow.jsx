import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetch from '../../hooks/useFetch';
import ProductCardView from './ProductCardView';
import { SIZES, COLORS } from '../../constants';  // Ensure COLORS is imported if used

const ProductsRow = () => {
    const { data, loading, error, refetch } = useFetch();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ marginLeft: 12 }}>
                {loading ? (
                    <ActivityIndicator size={SIZES.xLarge} color={COLORS.primary} />
                ) : error ? (
                    <Text>Something Went Wrong</Text>
                ) : (
                    <FlatList
                        data={data}
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => <ProductCardView item={item} />}
                        horizontal
                        contentContainerStyle={{ columnGap: SIZES.medium }}
                    />
                )}
            </View>
        </SafeAreaView>
    );
};

export default ProductsRow;
