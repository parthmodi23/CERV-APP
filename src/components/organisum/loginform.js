import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, View, Text, Image, Dimensions, KeyboardAvoidingView, Alert } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../atoms/buttoncomponent/button'
import FormInput from '../atoms/commonforminput/forminput'
import colors from '../../constants/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UpperComponent from '../atoms/commonscreen/uppercontainer'
import LowerComponent from '../atoms/commonscreen/lowercomponent'
import { useDispatch,useSelector } from 'react-redux';
import * as authActions from '../../redux/actions/auth'
import SelectRoleScreen from '../../screens/role/selectrolescreen'

const { width, height } = Dimensions.get('window')

const Loginform = (props) => {

  const [passwordvisible, setPasswordvisible] = useState(true)
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch=useDispatch()
  const role = route.params?.role??""
  const userselectedrole=useSelector(state=>state.auth.role)
  console.log(userselectedrole)
  const handleregister = () => {
    navigation.navigate('register', {
      role: role
    })
  }

  const handleforgotpassword=()=>{
    navigation.navigate('forgotpassword')
  }
  useEffect(() => {

    navigation.setOptions({

      headerLeft: () => (
        <MaterialCommunityIcons
          name='arrow-left'
          size={30}
          color='black'
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 10 }}
        />
      ),

    });
  }, [navigation]);

  return (
    <View style={styles.mainscreen}>

      <UpperComponent>
        <View style={styles.uppercontainer}>
          <View style={styles.welcometextcontainer}>
            <Text style={styles.welcometext}>Welcome</Text>
            <Text style={styles.subtext}>{`Are you a chef,do catering?\nAre you looking for a caterer\nfor an event?\nLogin or Register Now`}</Text>
          </View>
          <View style={styles.iconcomponent}>
            <Image style={styles.imagepng} source={require('../../assests/images/loginpagepng.png')} />
          </View>
        </View>
      </UpperComponent>
      <KeyboardAwareScrollView>
        <LowerComponent>
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
              password: Yup.string().min(3, "password must be atleast  6 character long").required("Password is required"),
            })}

            onSubmit={(values) => {
              //other validation from backend side
              dispatch(authActions.login(values.email,values.password))
              if (userselectedrole ==1) {
                navigation.navigate('catererhome')
              }
              else if (userselectedrole == 2) {
                navigation.navigate('customerhome')
              } else {
                Alert.alert("server side isuue please wait")
                return
              }
              //after production ready i will use this payload
              // const payload={
              //   email:values.email,
              //   password:values.password,
              // }
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
                  <TouchableOpacity onPress={handleforgotpassword}>
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
          {/* </KeyboardAvoidingView>
        </ScrollView> */}

        </LowerComponent>
      </KeyboardAwareScrollView>


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
