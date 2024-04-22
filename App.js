import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/auth/login';
import { GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler';
import MainNavigator from './src/navigation/navigation';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from './src/constants/colors';
import {thunk} from 'redux-thunk'; // Corrected import
import auth from './src/redux/reducer/auth'
import { combineReducers, createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import verifyotp from './src/redux/reducer/verifyotp';
import home from './src/redux/reducer/homereducer';
import userProfile from './src/redux/reducer/profilereducer'
// // Combine reducers
const rootReducer = combineReducers({
  auth:auth,
  verifyotp:verifyotp,
  home:home,
  userProfile:userProfile
});

// Create Redux store
const store = createStore(rootReducer, applyMiddleware(thunk, logger)); // thunk and logger middlewares


export default function App() {

  return (
    <View style={styles.container}>
      {/* <SafeAreaView style={{ flex: 1}}> */}
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Provider store={store}>
            <NavigationContainer>
              <MainNavigator />
            </NavigationContainer>
          </Provider>
        </GestureHandlerRootView>
      {/* </SafeAreaView> */}



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',

  },
});


