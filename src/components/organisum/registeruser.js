import React, { useEffect, useState } from 'react'
import LowerComponent from '../atome/commonscreen/lowercomponent'
import UpperComponent from '../atome/commonscreen/uppercontainer'
import { View, StyleSheet, Text, Image, KeyboardAvoidingView, Alert, Dimensions, Pressable, ScrollView } from 'react-native'
import colors from '../../constants/colors'
import FormInput from '../atome/commonforminput/forminput'
import CustomButton from '../atome/buttoncomponent/button'
import Camera from '../atome/camera'
import { Formik } from 'formik'
import * as Yup from 'yup'
import CheckBox from 'react-native-check-box'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation, useRoute } from '@react-navigation/native'
import axios from 'axios'

const { width, height } = Dimensions.get('window')

const RegisterUser = (props) => {

    const [ischecked, setIschecked] = useState(false)
    const [passwordvisible, setPasswordvisible] = useState(true)
    const navigation=useNavigation()
    const route=useRoute()

    const role=route.params

    console.log("registeruserrole",role)
 

    return (
        <View style={styles.mainscreen}>
            <UpperComponent>
                    <View style={styles.uppercomponent}>
                        <View style={styles.textcomponent}>
                            <Text style={styles.starttext}>Let's Start!</Text>
                            <Text style={styles.tellusetext}>Tell us more about you</Text>
                        </View>
                        <View style={styles.iconcomponent}>
                            <Image style={styles.iconpng} source={require('../../assests/images/signuppagepng.png')} />
                        </View>
                    </View>
            
            </UpperComponent>

            <LowerComponent>
                {/* <KeyboardAwareScrollView 
                                  contentContainerStyle={{ flexGrow: 1 }}
                                  showsVerticalScrollIndicator={false}
                     > */}
                <ScrollView showsVerticalScrollIndicator={false}>
                    <KeyboardAvoidingView behavior='padding' enabled>
                        <View style={styles.lowerpart}>
                            <View style={styles.camera}>
                                <Camera />
                            </View>
                            <Formik
                                const initialValues={{
                                    username: '',
                                    email: '',
                                    password: '',
                                    confirmpassword: ''
                                }}
                                validationSchema={Yup.object().shape({
                                    username: Yup.string().required("User name is require"),
                                    email: Yup.string().email('Invalid Email id').required('Email id is require'),
                                    password: Yup.string().min(6, "password must be atleast  6 character long").required("Password is required"),
                                    confirmpassword: Yup.string().oneOf([Yup.ref('password'), null], 'password must match').required('confirm password is require')
                                })}

                                onSubmit={values => {
                                    if (!ischecked) {
                                        Alert.alert("Alert!", "Please  Accept the terms and condition")
                                    }
                                    else{
                                        axios.post( )
                                            navigation.navigate('phonenumber',{})
                                    }

                                }}


                            >
                                {({ handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
                                    <View>
                                        <View>
                                            <FormInput
                                                headingname={"User name"}
                                                iconname={'account'}
                                                placeholder={'User name'}
                                                onChange={handleChange('username')}
                                                onBlur={handleBlur('username')}
                                                value={values.username}

                                            />
                                            {touched.username && errors.username && <Text style={styles.errortext}>{errors.username}</Text>}

                                            <FormInput
                                                headingname={"Email"}
                                                iconname={'email'}
                                                placeholder={'Email address'}
                                                onChange={handleChange('email')}
                                                onBlur={handleBlur('email')}
                                                value={values.email}

                                            />
                                            {touched.email && errors.email && <Text style={styles.errortext}>{errors.email}</Text>}
                                            <FormInput
                                                headingname={"Password"}
                                                iconname={'lock'}
                                                placeholder={'Password'}
                                                onChange={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                                                sideicon={'eye'}
                                                passwordeye={() => setPasswordvisible(!passwordvisible)}
                                                secureTextEntry={passwordvisible}

                                            />
                                            {touched.password && errors.password && <Text style={styles.errortext}>{errors.password}</Text>}

                                            <FormInput
                                                headingname={"Confirm Password"}
                                                iconname={'lock'}
                                                placeholder={'Confirm Password'}
                                                onChange={handleChange('confirmpassword')}
                                                onBlur={handleBlur('confirmpassword')}
                                                value={values.confirmpassword}
                                                sideicon={'eye'}
                                                passwordeye={() => setPasswordvisible(!passwordvisible)}
                                                secureTextEntry={passwordvisible}
                                            />
                                            {touched.confirmpassword && errors.confirmpassword && <Text style={styles.errortext}>{errors.confirmpassword}</Text>}
                                        </View>
                                        <View>
                                            <View style={styles.checkboxcomponent}>
                                                <CheckBox
                                                    onClick={() => setIschecked(!ischecked)}
                                                    isChecked={ischecked}
                                                />
                                                <Pressable onPress={() => setIschecked(!ischecked)}><Text numberOfLines={2} style={styles.label}>I agree to the <Text style={styles.privacyText}>Terms & Condition </Text> and <Text style={styles.privacyText}>Privacy Policy</Text></Text>
                                                </Pressable>
                                            </View>
                                            <CustomButton style={styles.buttonsize} onPress={handleSubmit} title={"Next"} />
                                        </View>
                                    </View>
                                )}
                            </Formik>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
                {/* </KeyboardAwareScrollView> */}
            </LowerComponent>
        </View>
    )
}

const styles = StyleSheet.create({
    mainscreen: {
        backgroundColor: colors.CERVmaincolor
    },
    camera: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    // upperpart: {
    //     flex: 1,
    // },
    lowerpart: {
    },
    privacyText: {
        color: colors.CERVmaincolor
    },
    uppercomponent: {
        flexDirection: 'row',
        margin: 15,
    },
    textcomponent: {
        justifyContent: 'center'
    },
    starttext: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: width * 0.065,
    },
    tellusetext: {
        color: colors.white,
        marginTop: 10,
        fontSize: width * 0.04
    },
    iconcomponent: {
        height: height * 0.3,
        width: width * 0.5
    },
    iconpng: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    errortext: {
        color: colors.error
    },
    buttonsize: {
        marginTop: 10,
        backgroundColor: 'red'
    },
    checkboxcomponent: {
        flexDirection: 'row',
        marginTop: 20
    },
    label: {
        marginRight: 20,
        marginLeft: 10
    }
})

export default RegisterUser
