import React, { useMemo, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import { Dropdown } from 'react-native-element-dropdown';
import colors from '../../../constants/colors';

const Ordertypeanddetails = () => {
    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Delivery',
            value: 'Delivery'
        },
        {
            id: '2',
            label: 'Pickup',
            value: 'Pickup'
        },
        {
            id: '3',
            label: 'Both',
            value: 'Both'
        }
    ]), []);

    const data = [
        { id: 1, label: '5 k.m : $2.50', value: '1' },
        { id: 2, label: '10 k.m : $5.00', value: '2' },
        { id: 3, label: '15 k.m : $7.50', value: '3' },
        { id: 4, label: '20 k.m : $10.50', value: '4' },
        { id: 5, label: '25 k.m : $12.50', value: '5' },
        { id: 6, label: '30 k.m : $15.50', value: '6' },
    ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [selectedId, setSelectedId] = useState();

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
        }
        return null;
    };

    return (
        <View style={styles.mainscreen}>
            <Text style={styles.text}>Order Type</Text>
            <RadioGroup
                radioButtons={radioButtons}
                onPress={setSelectedId}
                selectedId={selectedId}
                containerStyle={styles.radiocontainer}

            />
            {/* {renderLabel()} */}
            <Text style={styles.subtext}>Distance and fee</Text>
            <Dropdown
                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                data={data}
                defaultValue={value}
                onSelect={(item) => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                // search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={!isFocus ? 'Select item' : '...'}
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
            // renderItem={<RadioGroup 

            // />}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    mainscreen: {
        marginHorizontal: 10
    },
    radiocontainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    text: {
        fontSize: 20,
    },
    subtext: {
        color: colors.lighttextcolor
    }
});

export default Ordertypeanddetails;
