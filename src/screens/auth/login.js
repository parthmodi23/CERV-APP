import React, { useEffect } from 'react'
import Loginform from '../../components/organisum/loginform';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Login = (props) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Loginform />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default Login
