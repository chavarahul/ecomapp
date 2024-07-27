import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../constants/index'
const styles = StyleSheet.create({
    appBarWraper:{
          marginHorizontal:22,
          marginTop:SIZES.small,
    },
    appBar:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray
    },cartCount:{
        position:'absolute',
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:'center',
        backgroundColor:'green',
        justifyContent:'center',
        zIndex:999
    },
    cartNumber:{
        fontFamily:"regular",
        fontSize:10,
        fontWeight:'600',
        color:COLORS.lightWhite,
    }
})

export default styles;