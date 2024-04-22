import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import colors from '../../../constants/colors';
import { RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AddressCard from '../../molecules/customer/addresscard';
import { FlatList } from 'react-native-gesture-handler';
import MyAddress from '../../../data/addressdata';
import { useNavigation } from '@react-navigation/native';

const SaveAddress = () => {
  const navigation=useNavigation()

  useEffect(() => {
    navigation.setOptions({
        title:'Saved Address',
        headerTitleAlign: "center",
    })
}, [])


  return (
    <View style={styles.mainScreen}>
     <FlatList
     data={MyAddress}
     renderItem={(item)=>{
      console.log(item)
      return <View>
        <AddressCard
        Title={item.item.title}
        Address={item.item.address}
        userValue={false}
        />
      </View>
     }}
     
     />
     
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal:wp(2),
    
  },
  


});

export default SaveAddress;
