import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import CheckBox from 'react-native-check-box';
import colors from '../../../constants/colors';

const Foodcategory = () => {
  const [foodCategories, setFoodCategories] = useState([
    { name: 'Chinese', checked: false },
    { name: 'Indian', checked: false },
    { name: 'Mexican', checked: false },
    { name: 'Italian', checked: false },
    { name: 'Thai', checked: false },
    { name: 'Korean', checked: false }
  ]);

  const handleCheckBoxToggle = (index) => {
    const updatedCategories = [...foodCategories];
    updatedCategories[index].checked = !updatedCategories[index].checked;
    setFoodCategories(updatedCategories);
  };

  const selectedCategories = foodCategories
    .filter(category => category.checked)
    .map(category => category.name)
    .join(', ');

  return (
    <View style={styles.mainscreen}>
      <Text style={styles.text}>
        Food Category
      </Text>
      <TextInput
        style={styles.selectedCategoriesInput}
        value={selectedCategories}
        editable={false}
      />
      {/* //for generate muliple checkboxes we can you amp function */}
      {foodCategories.map((category, index) => (
        <View key={index} style={styles.checkboxContainer}>
          <CheckBox
            isChecked={category.checked}
            onClick={() => handleCheckBoxToggle(index)}
            checkedCheckBoxColor={colors.CERVmaincolor}
          />
          <TextInput
            style={styles.label}
            value={category.name}
            editable={false}
          />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mainscreen: {
    marginHorizontal: 20,
    marginTop: 20
  },
  text:{
    fontSize:20,
    marginBottom:20,
    color:'black'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  label: {
    marginLeft: 8,
    flex: 1,
    color:'black'
  },
  selectedCategoriesInput: {
    marginBottom: 10,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'black',
    paddingBottom: 5
  }
});

export default Foodcategory;
