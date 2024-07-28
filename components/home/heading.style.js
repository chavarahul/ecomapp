import { StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../../constants/index';

const styles = StyleSheet.create({
  container:{
    marginTop:SIZES.medium,
    // marginBottom:-SIZES.xSmall,
    marginHorizontal:20
  },
  header:{
    flexDirection:'row',
    justifyContent:'space-between'
  },
  headerTitle:{
    fontFamily:'semibold',
    fontSize:SIZES.xLarge -5
  }
})

export default styles;