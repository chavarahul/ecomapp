import { StyleSheet, Text, View } from 'react-native'
import { COLORS, SIZES } from '../constants';


const styles = StyleSheet.create({
    cover:{
        height:SIZES.height/2.4,
        width:SIZES.width - 60 ,
        resizeMode:'contain',
        marginBottom:SIZES.xxLarge,
        marginTop:SIZES.small - 5
    },
    title:{
        fontFamily:"bold",
        fontSize:SIZES.xLarge - 4,
        color:COLORS.primary,
        alignItems:'center',
        marginBottom:SIZES.xxLarge
    },
    wrapper:{
        marginBottom:20,
        // marginHorizontal:10
    },
    label:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        marginBottom:5,
        marginEnd:5,
        textAlign:'right',
    },
    inputWrapper: (borderColor)  =>({
        borderColor: borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:50,
        borderRadius:12,
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:15
    }),
    iconStyle:{
        marginRight:10
    },
    errorMessage:{
        marginTop:5,
        color:'red',
        fontFamily:'regular',
        fontSize:SIZES.xSmall,
        marginLeft:5
    },
    registration:{
        textAlign:'center',
        marginVertical:20,

    }
})

export default styles;