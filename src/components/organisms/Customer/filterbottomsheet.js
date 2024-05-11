import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const FilterBottomSheet = ({children,sheetStyle,refRBSheet,closeFilter,closeButton,openFilter}) => {
  // const refRBSheet = useRef();

  // const openFilter = () => {
  //   refRBSheet.current.open();
  // };

  // const closeFilter = () => {
  //   refRBSheet.current.close();
  // };

  return (
    <View style={styles.mainScreen}>
    
      <RBSheet
        ref={refRBSheet}
        height={300}
        customStyles={{
          wrapper: {
            backgroundColor: 'transperent',
          },
          draggableIcon: {
            backgroundColor: 'red',
          },
          container: {
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          },
        }}
      >
        <TouchableOpacity style={[styles.closeButton,closeButton]} onPress={closeFilter}>
          <Text>Close Filter</Text>
        </TouchableOpacity>
        <View style={[styles.sheetContent,sheetStyle]}>
          {children}
        </View>
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    marginBottom: 10,
  },
  sheetContent: {
    backgroundColor: 'white',
    padding: 20,
  },
  closeButton: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'lightgray',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default FilterBottomSheet;
