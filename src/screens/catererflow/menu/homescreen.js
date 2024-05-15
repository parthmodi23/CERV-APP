import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import CatererMenuScreen from '../../../components/organisms/Caterer/caterermenuscreen'
import CatererMenuCard from '../../../components/molecules/caterer/caterermenucard'

const CatererHomeScreen = (props) => {
  return (
    <View style={styles.mainScreen}>
      <CatererMenuScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  }
})

export default CatererHomeScreen
