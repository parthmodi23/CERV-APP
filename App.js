import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/login';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import MainNavigator from './src/navigation/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from './src/constants/colors';



export default function App() {

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex:1,backgroundColor:colors.CERVmaincolor}}>    
        <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
    
    </GestureHandlerRootView> 
    </SafeAreaView>


 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
   
  },
});


