import { MaterialCommunityIcons } from '@expo/vector-icons'
import React from 'react'
import { TextInput, StyleSheet, View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CustomButton from '../../atome/buttoncomponent/button'
import FormInput from '../../atome/commonforminput/forminput'
import colors from '../../../constants/colors'


const Loginform = (props) => {


  return (
    <View style={styles.container}>

      <View style={styles.uppercontainer}>
        <View style={styles.welcometextcontainer}>
          <Text style={styles.welcometext}>Welcome</Text>
          <Text style={styles.subwtext}>{`Are you a chef,do catering?\nAre you looking for a caterer\nfor an event?\nLogin or Register Now`}</Text>
        </View>
        <View style={styles.iconcomponent}>
          <Image style={styles.imagepng} source={require('../../../assests/images/loginpagepng.png')} />
        </View>

      </View>
      <View style={styles.lowercontainer}>
        <View>
          <Text style={styles.logintext}>Login</Text>
          <Text style={styles.loginsubtext}>Login to your account or Register below</Text>
        </View>
        {/* <Text style={styles.headingtext}>Email</Text>
          {/* <MaterialCommunityIcons size={24} name='email' color='#f5694e' /> */}
        {/* <TextInput style={styles.inputtext}
            placeholder='Email'
            keyboardType="email-address"
            autoCapitalize='none'
          /> */}
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

          onSubmit={values => console.log(values)}

        >
          {({ handleChange, handleBlur, values, handleSubmit, errors, touched }) => (
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
                  onPress={() => { console.log('pressed') }}
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
          <TouchableOpacity><Text style={styles.register}>Register</Text></TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5694e",
  },
  uppercontainer: {
    height: '30%',
    alignItems: 'center',
    flexDirection: 'row'
  },
  lowercontainer: {
    height: '70%',
    backgroundColor: '#ffff',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20
  },
  inputtext: {
    paddingHorizontal: 10,
    width: '80%'
  },
  // emailpasscomponent: {
  //   flexDirection: 'row',
  //   borderBottomColor: 'black',
  //   // borderBottomWidth: 2,
  // },

  passwordeye: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },

  logintext: {
    fontSize: 30,
    marginVertical: 5
  },
  loginsubtext: {
    fontSize: 17,
    marginBottom: 30
  },
  // headingtext: {
  //   marginVertical: 10,
  //   color: '#cccccc',
  //   fontSize: 15,
  //   fontWeight:'bold'
  // },
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
    marginHorizontal: 10
  },
  gredient: {
    flex: 1,
  },


  //uppercontainer
  welcometext: {
    fontSize: 30,
    color: colors.white,
    marginVertical: 10
  },
  welcometextcontainer: {
    marginLeft: 10,
  },
  subwtext: {
    color: colors.white,
    fontSize: 15
  },
  iconcomponent: {
    height: 250,
    width: 150,
    marginTop: 20
  },

  imagepng: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'

  }

})
export default Loginform
