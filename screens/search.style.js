import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../constants/index'
const styles = StyleSheet.create({
  searchContainer:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    marginVertical:SIZES.medium,
    marginHorizontal:12,
    height:50
  },
  searchIcon:{
    color:COLORS.gray,
    marginHorizontal:10
  },
  searchWrapper:{
    flex:1,
    marginRight:10,
    borderRadius:SIZES.small,
    backgroundColor:COLORS.secondary
  },
  searchInput:{
    fontFamily:'regular',
    width:'100%',
    height:'100%',
    border:1,
    borderColor:'red',
    paddingHorizontal:SIZES.small,
  },
  searchBtn:{
    backgroundColor:COLORS.primary,
    borderRadius:SIZES.medium,
    width:50,
    height:'100%',
    alignItems:"center",
    justifyContent:'center'
  }
})

export default styles;