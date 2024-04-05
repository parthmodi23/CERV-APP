import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, View, Text, Image, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../../atome/buttoncomponent/button'
import FormInput from '../../atome/commonforminput/forminput'
import colors from '../../../constants/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'
import UpperComponent from '../../atome/commonscreen/uppercontainer'
import LowerComponent from '../../atome/commonscreen/lowercomponent'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native'

const { width, height } = Dimensions.get('window')

const Loginform = (props) => {

  const [passwordvisible, setPasswordvisible] = useState(true)
  const navigation = useNavigation()
  const route = useRoute()

  const role = route.params?.role??""

  const handleregister = () => {
    navigation.navigate('register', {
      role: role
    })
  }

  useEffect(()=>{
    navigation.setOptions({
      headerLeft: () => <MaterialCommunityIcons onPress={() => navigation.goBack()} name='arrowleft'  color='black' size={24}/>
  });
  },[])


  return (
    <View style={styles.mainscreen}>

      <UpperComponent>
        <View style={styles.uppercontainer}>
          <View style={styles.welcometextcontainer}>
            <Text style={styles.welcometext}>Welcome</Text>
            <Text style={styles.subtext}>{`Are you a chef,do catering?\nAre you looking for a caterer\nfor an event?\nLogin or Register Now`}</Text>
          </View>
          <View style={styles.iconcomponent}>
            <Image style={styles.imagepng} source={require('../../../assests/images/loginpagepng.png')} />
          </View>
        </View>
      </UpperComponent>
      <LowerComponent>
        <ScrollView showsVerticalScrollIndicator={false}>
          <KeyboardAvoidingView behavior='position' enabled>
            <View>
              <Text style={styles.logintext}>Login</Text>
              <Text style={styles.loginsubtext}>Login to your account or Register below</Text>
            </View>

            <Formik
              const initialValues={{
                email: '',
                password: '',
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string().email('Invalid Email id').required('Email id is require'),
                password: Yup.string().min(6, "password must be atleast  6 character long").required("Password is required"),
              })}

              onSubmit={(values) => {
                //other validation from backend side
                console.log(values)
                if (role == 'Caterer') {
                  navigation.navigate('catererhomescreen')
                }
                else if (role == 'Customer') {
                  navigation.navigate('customerhomescreen')
                } else {
                  Alert.alert("server side isuue")
                }
              }}
            >
              {({ handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
                <View>
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
                    passwordeye={() => setPasswordvisible(!passwordvisible)}
                    secureTextEntry={passwordvisible}
                    sideicon={'eye'}
                  />
                  {touched.password && errors.password && <Text style={styles.errortext}>{errors.password}</Text>}

                  <View style={styles.forgotpasswordtext}>
                    <TouchableOpacity>
                      <Text>Forgot Password?</Text>
                    </TouchableOpacity>
                  </View>
                  <View>

                    <CustomButton
                      style={styles.buttonContainer}
                      title="Login"
                      onPress={handleSubmit}
                    />
                  </View>

                </View>)}
            </Formik>
            <View style={styles.orcomponent}>
              <View style={styles.orline} />
              <View>
                <Text style={styles.ortext}>OR</Text>
              </View>
              <View style={styles.orline} />
            </View>
            <View style={styles.registercomponent}>
              <Text>Don't have an Account? </Text>
              <TouchableOpacity onPress={handleregister}><Text style={styles.register}>Register</Text></TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </LowerComponent>
    </View>
  )
}

const styles = StyleSheet.create({
  mainscreen: {
    flex: 1,
    backgroundColor: "#f5694e",
  },
  uppercontainer: {
    flexDirection: 'row',
    margin: 10,
  },

  inputtext: {
    paddingHorizontal: 10,
    width: '80%'
  },

  errortext: {
    color: colors.error
  },

  logintext: {
    fontSize: width * 0.083,
    marginVertical: 5
  },
  loginsubtext: {
    fontSize: 17,
    marginBottom: 30
  },


  forgotpasswordtext: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 5
  },
  registercomponent: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  buttonContainer: {
    marginVertical: 30
  },

  //or portion
  orcomponent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20
  },
  orline: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  ortext: {
    marginHorizontal: hp(2)
  },
  gredient: {
    flex: 1,
  },


  //uppercontainer
  welcometext: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: width * 0.065,
  },
  subtext: {
    color: colors.white,
    marginTop: 10,
    fontSize: width * 0.04
  },
  welcometextcontainer: {
    justifyContent: 'center'
  },
  iconcomponent: {
    height: height * 0.3,
    width: width * 0.5
  },
  imagepng: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'

  },
  register: {
    fontWeight: 'bold'
  }

})
export default Loginform
