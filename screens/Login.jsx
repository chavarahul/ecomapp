import { View, Text, ScrollView, Image, TextInput, TouchableOpacity,Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import styles from './login.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const Login = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(false)

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Provide a Valid Email address').required('required'),
    password: Yup.string().min(8, 'Password must be 8 letters').required('required')
  })

  const inValidForm = () => {
    Alert.alert(
      "Invalid Form",
      "Please Provide required feilds",
      [
        {text:'Cancel'},
        {defaultIndex:1}
      ]
    )
  } 

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => { navigation.goBack() }} />
          <Image source={require('../assets/images/bk.png')} style={styles.cover} />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Formik initialValues={{ email: '', password: '' }} validationSchema={validationSchema}>
            {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Email</Text>
                  <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                    <MaterialCommunityIcons name='email-outline' size={20} color={COLORS.gray} style={styles.iconStyle} />
                    <TextInput
                      placeholder='Enter email'
                      onFocus={() => { setFieldTouched('email') }}
                      onBlur={() => { setFieldTouched('email', '') }}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                      value={values.email}
                      onChangeText={handleChange('email')}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.wrapper}>
                  <Text style={styles.label}>Password</Text>
                  <View style={styles.inputWrapper(touched.password ? COLORS.secondary : COLORS.offwhite)}>
                    <MaterialCommunityIcons name='lock-outline' size={20} color={COLORS.gray} style={styles.iconStyle} />
                    <TextInput
                      placeholder='Password'
                      onFocus={() => { setFieldTouched('password') }}
                      onBlur={() => { setFieldTouched('password', '') }}
                      autoCapitalize='none'
                      autoCorrect={false}
                      style={{flex:1}}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      secureTextEntry={obsecureText}
                    />
                    <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                      <MaterialCommunityIcons name={obsecureText ? 'eye-outline' : 'eye-off-outline'} size={18} />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button title={"L O G I N"} onPress={() => {isValid ? handleSubmit : inValidForm}}  isValid={isValid} />
                <Text style={styles.registration} onPress={()=>{navigation.navigate('SignUp')}}>register</Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

export default Login