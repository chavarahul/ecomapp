import { View, Text, ScrollView, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { BackBtn, Button } from '../components';
import styles from './login.styles';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';
import axios from 'axios';

const SignUp = ({ navigation }) => {
    const [loader, setLoader] = useState(false);
    const [obsecureText, setObsecureText] = useState(false)

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Provide a valid Email address').required('required'),
        location: Yup.string().min(3, 'Provide a valid location').required('required'),
        username: Yup.string().min(3, 'Provide a valid username').required('required'),
        password: Yup.string().min(8, 'Password must be 8 letters').required('required')
    })

    const inValidForm = () => {
        Alert.alert(
            "Invalid Form",
            "Please Provide required feilds",
            [
                { text: 'Cancel' },
                { defaultIndex: 1 }
            ]
        )
    }

    const registerUser = async(values) => {
        setLoader(true);
        try {
            const response = await axios.post('http://192.168.29.88:3000/api/register',values);
            if(response?.status === 201){
                console.log('user created')
                 navigation.replace('Login')
            }
        } catch (error) {
            console.log(error); 
        }
    }
    return (
        <ScrollView>
            <SafeAreaView style={{ marginHorizontal: 20 }}>
                <View>
                    <BackBtn onPress={() => { navigation.goBack() }} />
                    <Image source={require('../assets/images/bk.png')} style={styles.cover} />
                    <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
                    <Formik initialValues={{ email: '', password: '', location: '',username:'' }} validationSchema={validationSchema}
                    onSubmit={(values)=> registerUser(values)}
                    >
                        {({ handleChange, handleBlur, handleSubmit, touched, values, errors, isValid, setFieldTouched }) => (
                            <View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Username</Text>
                                    <View style={styles.inputWrapper(touched.username ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='face-man-outline' size={20} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='username'
                                            onFocus={() => { setFieldTouched('username') }}
                                            onBlur={() => { setFieldTouched('username', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ flex: 1 }}
                                            value={values.username}
                                            onChangeText={handleChange('username')}
                                        />
                                    </View>
                                    {touched.username && errors.username && (
                                        <Text style={styles.errorMessage}>{errors.username}</Text>
                                    )}
                                </View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Email</Text>
                                    <View style={styles.inputWrapper(touched.email ? COLORS.secondary : COLORS.offwhite)}>
                                        <MaterialCommunityIcons name='email-outline' size={20} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='email'
                                            onFocus={() => { setFieldTouched('email') }}
                                            onBlur={() => { setFieldTouched('email', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ flex: 1 }}
                                            value={values.email}
                                            onChangeText={handleChange('email')}
                                        />
                                    </View>
                                    {touched.email && errors.email && (
                                        <Text style={styles.errorMessage}>{errors.email}</Text>
                                    )}
                                </View>
                                <View style={styles.wrapper}>
                                    <Text style={styles.label}>Location</Text>
                                    <View style={styles.inputWrapper(touched.location ? COLORS.secondary : COLORS.offwhite)}>
                                        <Ionicons name='location-outline' size={20} color={COLORS.gray} style={styles.iconStyle} />
                                        <TextInput
                                            placeholder='location'
                                            onFocus={() => { setFieldTouched('location') }}
                                            onBlur={() => { setFieldTouched('location', '') }}
                                            autoCapitalize='none'
                                            autoCorrect={false}
                                            style={{ flex: 1 }}
                                            value={values.location}
                                            onChangeText={handleChange('location')}
                                        />
                                    </View>
                                    {touched.location && errors.location && (
                                        <Text style={styles.errorMessage}>{errors.location}</Text>
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
                                            style={{ flex: 1 }}
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            secureTextEntry={obsecureText}
                                        />
                                        <TouchableOpacity onPress={() => { setObsecureText(!obsecureText) }}>
                                            <MaterialCommunityIcons name={obsecureText ? 'eye-outline' : 'eye-off-outline'} size={18} />
                                        </TouchableOpacity>
                                    </View>
                                    {touched.password && errors.password && (
                                        <Text style={styles.errorMessage}>{errors.password}</Text>
                                    )}
                                </View>
                                <Button title={"S I G N U P"} onPress={() => { isValid ? handleSubmit : inValidForm }} isValid={isValid} loader={loader} />
                                <Text style={styles.registration} onPress={() => { navigation.navigate('Login') }}>Login</Text>
                            </View>
                        )}
                    </Formik>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default SignUp