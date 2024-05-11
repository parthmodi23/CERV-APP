import React, { useEffect } from 'react'
import CatererCard from '../../../components/molecules/customer/caterercard'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Title } from 'react-native-paper'

const FavoritePage = () => {
    const navigation=useNavigation()

  useEffect(() => {
    navigation.setOptions({
        title:'My Favorites',
        headerTitleAlign: "center",
    })
}, [])
    
  return (
    <View style={styles.mainScreen}>
    <CatererCard/>
    </View>
  )
}

const styles=StyleSheet.create({
    mainScreen:{
        flex:1
    }
})

export default FavoritePage
