import React, { useEffect } from 'react'
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Loginform from '../../components/organisms/auth/loginform';

const Login = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Loginform/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Login
