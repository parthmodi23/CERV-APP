import React, { useEffect } from 'react'
import { FlatList, FlatListComponent, Image, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import colors from '../../../constants/colors';
import CatererData from '../../../components/organisms/Customer/catererdata';
import EventAddress from '../../../components/molecules/customer/eventaddress';
const CustomerHomeScreen = (props) => {

  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => <Image style={{ height: hp(5), width: wp(10), tintColor: colors.CERVmaincolor }} source={require('../../../assests/images/Customerhome.png')} />,
      headerTitleAlign: "center",
      headerRight: () => <MaterialCommunityIcons
        name='bell-outline'
        size={25}
        onPress={()=>{
          navigation.navigate('notification')
        }}
        style={{ marginRight: wp(5) }}
      />,
      headerLeft: () => <SimpleLineIcons
        name='question'
        size={23}
        style={{ marginLeft: wp(5) }}
      />
    })
  })


  return (
    <View style={styles.mainScreen}>
      <EventAddress />
      <CatererData />
    </View>
  )
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(1),
    marginHorizontal: wp(5),
  },
  card: {
  }
})

export default CustomerHomeScreen
