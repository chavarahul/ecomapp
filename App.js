import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import Cart from './screens/Cart';
import ProductDetails from './screens/ProductDetails';
export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    regular:require('./assets/fonts/Poppins-Regular.ttf'),
    light:require('./assets/fonts/Poppins-Light.ttf'),
    medium:require('./assets/fonts/Poppins-Medium.ttf'),
    semibold:require('./assets/fonts/Poppins-SemiBold.ttf'),
    bold:require('./assets/fonts/Poppins-Bold.ttf'),
    extrabold:require('./assets/fonts/Poppins-ExtraBold.ttf'),
  })

  const onLayoutRootView = useCallback(async()=>{
    if(fontsLoaded){
      await SplashScreen.hideAsync()
    }
  },[fontsLoaded])

  if(!fontsLoaded){
    return null
  }
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Bottom Navigation' options={{headerShown:false}} component={BottomTabNavigation}/>
      <Stack.Screen name='Cart' options={{headerShown:false}} component={Cart}/>
      <Stack.Screen name='ProductDetails' options={{headerShown:false}} component={ProductDetails}/>
    </Stack.Navigator>
   </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle:{
    fontFamily:"extrabold",
    fontSize:20
  }
});
