import React from 'react'
import { MaterialCommunityIcons, MaterialIcons, Fontisto, Feather } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, Pressable, StyleSheet } from "react-native"
import { heightPercentageToDP as hp ,widthPercentageToDP as wp } from 'react-native-responsive-screen';
import colors from '../../../constants/colors';
const ProfileTab = ({ title, text, onPress }) => {
  return (
    <View style={styles.mainscreen}>
      <Pressable onPress={onPress} style={styles.rowcontainer}>
        <View style={styles.tabs}>
          <MaterialCommunityIcons name={title} size={25} color={colors.CERVmaincolor} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.righterror}>
          <MaterialCommunityIcons name='chevron-right' size={25} color={colors.rightarrow} />
        </View>
      </Pressable>
      <View style={styles.line}></View>
    </View> 
  )
}

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: hp(2),
    backgroundColor:colors.white
  },
  righterror: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  text: {
    marginLeft: wp(3),
    fontWeight:'500',
    fontSize:wp(4.5)

  },mainscreen:{
    flexDirection:'column',
  },
  line:{
    borderWidth:hp(0.036),
    borderColor:'gray'
  }
})
export default ProfileTab
