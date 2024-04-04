import React from 'react'
import Loginform from '../../components/molecules/auth/loginform';
import { View ,StyleSheet} from 'react-native';

const Login = (props) => {
  return (
    <View style={styles.container}>
        <Loginform/>
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  }
})
export default Login
