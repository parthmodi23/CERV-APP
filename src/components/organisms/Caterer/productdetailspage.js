import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CommonForminput from '../../atoms/commonforminput/commonforminput';
import Metrics from '../../../assests/Metrics';
import Camera from '../../atoms/camera';
import ProductSizeCard from '../../molecules/caterer/productsizecard';
import CustomButton from '../../atoms/buttoncomponent/button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { DataTable } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import colors from '../../../constants/colors';

const ProductDetailsPage = () => {
    const [isLoading, setIsLoading] = useState(false);

    const ProductDetails = [
        {
            size: 'Regular',
            quantity: 200,
            price: 100.00
        },
        {
            size: 'Large',
            quantity: 70,
            price: 120.00
        },
        {
            size: 'Medium',
            quantity: 60,
            price: 330.00
        }
    ];

    const formik = useFormik({
        initialValues: {
            categoryname: '',
            subcategoryname: '',
            description: '',
        },
        validationSchema: Yup.object().shape({
            categoryname: Yup.string().required('Category name is required'),
            subcategoryname: Yup.string().required('Subcategory name is required'),
            description: Yup.string().required('Description is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
        }
    });

    return (
        <View style={styles.mainScreen}>
        <KeyboardAwareScrollView style={styles.mainScreen}>
            <Text style={styles.text}>Product Photo</Text>
            <View style={styles.cameraContainer}>
                <Camera
                    imageoutercontainer={styles.imageoutercontainer}
                    forimage={styles.forimage}
                    showButton={false}
                />
            </View>
            <CommonForminput
                title={'Category Name'}
                onChangeText={formik.handleChange('categoryname')}
                onBlur={formik.handleBlur('categoryname')}
                placeholder={'Category name'}
            />
            <CommonForminput
                title={'Sub Category Name'}
                onChangeText={formik.handleChange('subcategoryname')}
                onBlur={formik.handleBlur('subcategoryname')}
                placeholder={'Subcategory name'}
            />
            <CommonForminput
                title={'Description'}
                onChangeText={formik.handleChange('description')}
                onBlur={formik.handleBlur('description')}
                placeholder={' Your Description for the Product '}
                numberOfLines={3}
            />
            <DataTable.Header style={styles.tableHeader}>
                <DataTable.Title style={styles.headerText}>Size</DataTable.Title>
                <DataTable.Title style={styles.headerText}>Quantity</DataTable.Title>
                <DataTable.Title style={styles.headerText}>Price</DataTable.Title>
            </DataTable.Header>
            <FlatList
                data={ProductDetails}
                renderItem={({ item }) => (
                    <View style={styles.detailsContainer}>
                        <ProductSizeCard
                            size={item.size}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    </View>
                )}
            />
           
        </KeyboardAwareScrollView>
         <CustomButton
         title={'Edit Product'}
         disabled={isLoading}
         onPress={formik.handleSubmit}
     />
     </View>
    );
};

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(15),
    },
    headerText: {
        paddingHorizontal:Metrics.CountScale(20)

    },
    imageoutercontainer: {
        width: wp('90%'),
        height: hp('25%'),
        borderRadius: 0
    },
    forimage: {
        width: wp('100%'),
        height: hp('100%'),
        resizeMode: 'contain',
        aspectRatio: 1.5 / 3
    },
    cameraContainer: {
        marginVertical: Metrics.CountScale(10)
    },
    text: {
        color:colors.lighttextcolor
    },
});

export default ProductDetailsPage;
