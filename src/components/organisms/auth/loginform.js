import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, Image, Dimensions, Alert, ActivityIndicator, Platform } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../../atoms/buttoncomponent/button'
import FormInput from '../../atoms/commonforminput/forminput'
import colors from '../../../constants/colors'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, useRoute } from '@react-navigation/native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import UpperComponent from '../../atoms/commonscreen/uppercontainer'
import LowerComponent from '../../atoms/commonscreen/lowercomponent'
import { useDispatch, useSelector } from 'react-redux';
import * as authActions from '../../../redux/actions/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const { width, height } = Dimensions.get('window')

const Loginform = (props) => {

  const [passwordvisible, setPasswordvisible] = useState(true)
  const [isuserogin, setUserLogin] = useState(false)
  const [token, setToken] = useState()
  const navigation = useNavigation()
  const route = useRoute()
  const dispatch = useDispatch()
  const role = route.params?.role ?? ""
  const userselectedrole = useSelector(state => state.auth.role)
  // console.log("role of the user", userselectedrole)
  const userrole = useSelector(state => state.auth.userselectedrole)

  const handleregister = () => {
    navigation.navigate('register', {
      role: role
    })
  }

  const handleforgotpassword = () => {
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
    console.log("run")
  }, [navigation]);

  const storeUserToken = async (token, role) => {
    console.log("hello")
    await AsyncStorage.setItem('userToken', token).then(() => {
      console.warn('user role',role)
      console.warn("store success");
      if (role === 2) {
        navigation.navigate('customerhome')
      }
      else if (role === 1) {
        navigation.navigate('catererhome')
      }else{
        Alert.alert("Error!","something went Wrong Please try again!")
      }
    }).catch((error) => {
      alert(error)
    })

  }

  const handleUserLogin = async (values) => {
    setUserLogin(true);

    dispatch(authActions.login(values.email, values.password))
      .then((res) => {
        console.log("response data from login", res);
        const accessToken = res?.accessToken;
        const userRole = res?.data?.role;
        
        if (!accessToken) {
          Alert.alert("Error", "No access token received.");
          setUserLogin(false);
          return;
        }

        setToken(accessToken);

        if (userRole) {
          storeUserToken(accessToken, userRole)
        } else {
          Alert.alert("Alert!", "Please select a valid role.");
        }
      })
      .catch((error) => {
        console.log("error in login", error);
        Alert.alert("Error", error); 
      })
      .finally(()=>{
        setUserLogin(false);
      })
  };

  // if(isuserogin){
  //   return(
  //     <ActivityIndicator size='large' color={colors.CERVmaincolor}/>
  //   )
  // }
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
        <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}
          enableOnAndroid={true}
          extraHeight={Platform.select({ android: 20 })}>
          <View style={styles.lowerscreen}>
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
                password: Yup.string().min(3, "password must be atleast 3 character long").required("Password is required"),
              })}

              onSubmit={(values) => {
                console.log(values)
                //other validation from backend side
                handleUserLogin(values)
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
                    sideicon={passwordvisible ? 'eye-off' : 'eye'}
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
                      title={isuserogin ? <ActivityIndicator size='small' color='black' /> : 'Login'}
                      disable={isuserogin ? true : false}
                      onPress={handleSubmit}
                    />
                  </View>

                </View>)}
            </Formik>
            <View style={styles.orcomponent}>
              <LinearGradient style={{ flex: 1, height: 1 }}
                colors={['#cccccc', 'white', 'white', 'white', 'white']}
                start={{ x: 0.7, y: 0.1 }}
                end={{ x: 0.1, y: 0.2 }}>
                <View style={styles.orline} /></LinearGradient>
              <View>
                <Text style={styles.ortext}>OR</Text>
              </View>
              <LinearGradient style={{ flex: 1, height: 1 }}
                colors={['#cccccc', 'white', 'white', 'white']}
                start={{ x: 0.3, y: 0.1 }}
                end={{ x: 0.7, y: 0.2 }}>
                <View style={styles.orline} /></LinearGradient>
            </View>
            <View style={styles.registercomponent}>
              <Text style={styles.textregister}>Don't have an Account? </Text>
              <TouchableOpacity onPress={handleregister}><Text style={styles.register}>Register</Text></TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
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
    fontSize: width * 0.06,
    marginVertical: 5,
    fontWeight: 'bold'
  },
  loginsubtext: {
    fontSize: 17,
    marginBottom: 30
  },
  lowerscreen: {
    padding: 5,
    marginTop: 20
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
    marginTop: hp(2),
  },
  buttonContainer: {
    marginVertical: hp(4)
  },

  //or portion
  orcomponent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: wp(5)
  },
  orline: {
    flex: 1,
    height: 0.1,
    // backgroundColor: colors.lighttextcolor,
  },
  ortext: {
    marginHorizontal: wp(3),
    color: colors.lighttextcolor
  },
  gredient: {
    flex: 1,
  },
  textregister: {
    color: colors.lighttextcolor
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
    justifyContent: 'center',
  },
  iconcomponent: {
    height: hp("30%"),
    width: wp("45%"),

  },
  imagepng: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'

  },
  register: {
    fontWeight: 'bold'
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  }

})
export default Loginform
