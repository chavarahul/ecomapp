import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../constants/index'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightWhite
    },
    cover: {
        height: 220,
        width: '100%',
        resizeMode: 'cover'
    },
    profileContainer: {
        flex: 1,
        alignItems: 'center',
    },
    profile: {
        height: 125,
        width: 125,
        borderRadius: 999,
        borderWidth: 2,
        borderColor: COLORS.primary,
        resizeMode: "cover",
        marginTop: -70,
    },
    name:{
        fontFamily:'bold',
        color:COLORS.primary,
        marginVertical:5,
    },
    loginBtn:{
        backgroundColor:COLORS.secondary,
        padding:2,
        borderWidth:0.4,
        borderColor:COLORS.primary,
        borderRadius:SIZES.xxLarge,
        alignItems:'center',
        justifyContent:'center'     
    },
    menuText:{
        fontFamily:'regular',
        fontSize:14,
        lineHeight:26,
        // paddingVertical:SIZES.small,
        marginHorizontal:18,
        color:COLORS.gray,
        fontWeight:'600'
    },
    menuWraper:{
        marginTop:SIZES.xLarge,
        width:SIZES.width -  SIZES.large,
        backgroundColor:COLORS.lightWhite,
        borderRadius:12,
    },
    menuItem:(borderBottomWidth) => ({
        borderBottomWidth:borderBottomWidth,
        flexDirection:"row",
        paddingVertical:15,
        paddingHorizontal:20,
        borderColor:COLORS.gray        
    })
})

export default styles