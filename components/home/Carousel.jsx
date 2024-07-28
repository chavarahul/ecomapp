import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {SliderBox} from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
    const slides = [
       "https://media.istockphoto.com/id/1212526330/photo/bohemian-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iIQ5wqa4NYpLn0YJvT_NAzMilwTFkTlprwbXAasOn9s=",
       "https://img.freepik.com/free-photo/picture-frame-by-velvet-armchair_53876-132788.jpg",
       "https://media.designcafe.com/wp-content/uploads/2023/07/05120637/modern-furniture-designs.jpg"
    ]
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
      images={slides}
      dotColor={COLORS.primary}
      inactiveDotColor={COLORS.secondary}
      ImageComponentStyle={{borderRadius:15,marginTop:15,width:'95%'}}
      circleLoop
      autoplay
      />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex:1,
        alignItems:'center',
    }
})