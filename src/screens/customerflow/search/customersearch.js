import React, { useEffect } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors';
import RecipeList from '../../../components/organisms/Customer/recipelist';
const CustomerSearch = () => {


  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({


      headerLeft: () => <MaterialIcons
        name="search" size={26}
        //   color={focused?colors.CERVmaincolor:"gray"}
        style={styles.icon}

      />,
    })
  })
  return (
    <View style={styles.recepis}>
      <RecipeList />
    </View>
  )
}

const styles = StyleSheet.create({
  recepis: {
    flex: 1,
    margin: wp(3)
  },
  icon: {
  }
})

export default CustomerSearch
