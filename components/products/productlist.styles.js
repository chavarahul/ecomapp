import { StyleSheet, Text, View } from 'react-native'
import {COLORS,SIZES} from '../../constants/index'
const styles = StyleSheet.create({
    loadingContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center'
    },
    container:{
        alignItems:'center',
        paddingTop:SIZES.xxLarge,
        paddingLeft:SIZES.small/2,
        marginRight:20,
        // width:SIZES.width-4
    },
    separator:{
        height:16
    }
})

export default styles