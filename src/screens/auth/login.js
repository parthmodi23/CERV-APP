import React, { useEffect } from 'react'
import Loginform from '../../components/molecules/auth/loginform';
import { View ,StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = (props) => {
  const navigation=useNavigation()

  // useEffect(()=>{
  //   navigation.setOptions({
  //     headerLeft: () => <MaterialCommunityIcos onPress={() => navigation.goBack()} name='back'  color='black' size={24}/>
  // });
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
