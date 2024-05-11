import React, { useEffect, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import colors from '../../../constants/colors';
import { RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AddressCard from '../../molecules/customer/addresscard';
import { FlatList } from 'react-native-gesture-handler';
import MyAddress from '../../../components/atoms/data/addressdata';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import * as profileAction from '../../../redux/actions/profileaction'
const SaveAddress = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  useEffect(() => {
    navigation.setOptions({
      title: 'Saved Address',
      headerTitleAlign: "center",
    })
    dispatch(profileAction.getUesrAddressData()).then((res) => {
      console.log(res) 
    })
      .catch((error) => {
        console.log("user error", error)
      })
  }, [])

  const userAddressData = useSelector(state => state.userProfile.userAddressData)
  console.log("address log", userAddressData)
  const [value, setCheckValue] = useState(userAddressData?.id)

  const handleChangeAddress = (value) => {
    setCheckValue(value)
  }

  return (
    <View style={styles.mainScreen}>
      <FlatList
        data={userAddressData}
        renderItem={({ item }) => {
          console.log(item)
          return <View>
            <RadioButton.Group onValueChange={() => handleChangeAddress} value={value}>
              <AddressCard
                Title={item?.title}
                Address={item?.address}
                userValue={item?.address?.id}
              />
            </RadioButton.Group>
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
    marginHorizontal: wp(2),

  },



});

export default SaveAddress;
