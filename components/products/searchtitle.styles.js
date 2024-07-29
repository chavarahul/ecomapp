import { StyleSheet } from 'react-native'
import {SIZES,COLORS, SHADOWS} from '../../constants/index'

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:SIZES.small,
    flexDirection:'row',
    backgroundColor:COLORS.lightWhite,
    borderRadius:SIZES.small,
    padding:SIZES.medium,
    ...SHADOWS.medium,
    shadowColor:COLORS.lightWhite
  },
  image:{
    height:70,
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    justifyContent:"center",
    alignItems:'center'
  },
  productImage:{
    width:'100%',
    height:65,
    borderRadius:SIZES.small,
    resizeMode:'cover'
  },
  textContainer:{
    flex:1,
    marginHorizontal:SIZES.medium,
  },
  productTitle:{
    fontFamily:'bold',
    fontSize:SIZES.medium,
    color:COLORS.primary
  }
})

export default styles;