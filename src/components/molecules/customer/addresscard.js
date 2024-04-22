import React, { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from 'react-native-check-box';
import colors from '../../../constants/colors';
import { RadioButton } from 'react-native-paper';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const AddressCard = ({Title,Address,userValue}) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleRadioChange = (value) => {
    setIsChecked(value); 
  };


  return (
    <View style={styles.mainScreen}>
      <RadioButton.Group onValueChange={handleRadioChange} value={isChecked}>
        <View style={styles.mainCardView}>
        <View style={styles.cardContainer}>
          <View style={styles.text}>
            <Text style={styles.mainText}>{Title}</Text>
            <Text numberOfLines={2} style={styles.subText}>{Address}</Text>
          </View>
          <View style={styles.radioButton} >
            <RadioButton value={userValue} /></View>
        </View> 
            <View style={styles.line}></View>
        </View>
      </RadioButton.Group>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center'
  },
  cardContainer: {
    width: '100%',
    height: hp(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    flexDirection: 'column',
  },
  mainText: {
    fontSize: hp(2.5),
    fontWeight:'bold'
  },
  subText: {
    fontSize: hp(2),

  },
  line: {
    borderWidth: 1,
    marginTop: hp(0.5),
    borderColor: colors.lighttextcolor,
    backgroundColor:colors.lighttextcolor
  },
  radioButton: {
    marginHorizontal: wp(5),
  },
  mainCardView:{
    flexDirection:'column',
    marginHorizontal: wp(3)

  }


});

export default AddressCard;