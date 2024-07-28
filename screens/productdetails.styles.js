import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from '../constants/index'
const styles = StyleSheet.create({
    con: {
        flex: 1,
        backgroundColor: COLORS.lightWhite,

    },
    upperRow: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 999,
        position: 'absolute',
        top: SIZES.xLarge,
        width: SIZES.width - 44
    },
    image: {
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    details: {
        marginTop: -SIZES.large,
        backgroundColor: COLORS.lightWhite,
        width: SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium,
    },
    titleRow: {
        marginHorizontal: 20,
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 44,
        top: 20
    },
    title: {
        fontFamily: 'bold',
        fontSize: SIZES.large
    },
    priceWrapper: {
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.large
    },
    price:{
        paddingHorizontal:10,
        paddingVertical:5,
        fontSize:SIZES.large -4,
        fontFamily:'semibold',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    },
    ratingRow:{
        paddingBottom: SIZES.small,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SIZES.width - 10,
    },
    rating:{
        top:SIZES.large,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginHorizontal:SIZES.large
    },
    ratingText:{
        fontFamily:'medium',
        color:COLORS.gray,
        paddingHorizontal:SIZES.xSmall
    },
    descriptionWrapper:{
        marginTop:SIZES.large*2,
        marginHorizontal:SIZES.large
    },
    description:{
        fontFamily:'medium',
        fontSize:SIZES.large -2 ,
    },
    descText:{
        fontFamily:'regular',
        fontSize:SIZES.small,
        textAlign:'justify',
        marginBottom:SIZES.small
    },
    location:{
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor:COLORS.secondary,
        alignItems:'center',
        padding:5,
        borderRadius:SIZES.large,
        marginHorizontal:12
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:SIZES.width 
    },
    cartBtn:{
        width:SIZES.width * 0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius:SIZES.large,
        marginLeft:12
    },
    cartTitle:{
        color:COLORS.lightWhite,
        fontSize:SIZES.medium,
        fontFamily:'semibold',
        marginLeft:SIZES.small
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:'center',
        justifyContent:'center'
    }
})

export default styles;