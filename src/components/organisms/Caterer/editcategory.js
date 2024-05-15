import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert, TextInput, ActivityIndicator } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomButton from "../../atoms/buttoncomponent/button";
import Metrics from "../../../assests/Metrics";
import colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import * as menuAction from '../../../redux/actions/caterer/menu'
import { useNavigation, useRoute } from "@react-navigation/native";
import Camera from "../../atoms/camera";

const EditCategory = () => {
    const [error, setError] = useState(null);
    const [isRefresing, setIsRefresing] = useState(false);
    const navigation = useNavigation();
    const route = useRoute()
    const productId = route?.params?.id
    const productName = route?.params?.name
    const image = route?.params?.image
    console.log("caterer Product Id", productId, productName)
    const dispatch = useDispatch();
    const imageUrl = useSelector(state => state.auth.profilefilepath);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: productId ? 'Edit Product' : 'Add Category',
            headerTitleAlign: 'center',
        });
    }, []);

    const handleUserData = async (value) => {

        console.log("from typing...=====>", value)
        const catererData = {
            name: value.categoryName,
            image: {
                uri: imageUrl,
                // uri:"file://data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252FNEWCERV-97b5a573-2130-437c-bdc3-cdeab4df4517/ImagePicker/8a87a67f-1e46-40aa-afe4-bedb6c80a377.jpeg",
                type: 'image/jpeg',
                name: 'photo.jpg',
            }
        }
        let formData = new FormData()
        for (let key in catererData) {
            formData.append(key, catererData[key])
        }
        console.log(formData)
        setIsRefresing(true);
        try {
            const data = productId ? await dispatch(menuAction.editAdminCategorie(productId, formData)) : await dispatch(menuAction.postAdminCategorie(formData));
            // const data = await dispatch(menuAction.editAdminCategorie(productId, formData))
            setError(false);
            console.log("screen log", data);
            if (data.success) {
                Alert.alert(data?.message)
                navigation.navigate('customerhomescreen')
            }
            // setCatererCategoriData(data?.data); // Update state with saved data if needed
            console.log('success');
        } catch (err) {
            setError(true);
            console.log(err); // Log error
            Alert.alert(err);
        } finally {
            setIsRefresing(false);
        }
    };

    const formik = useFormik({
        initialValues: {
            categoryName: productName || "",
        },
        validationSchema: Yup.object().shape({
            categoryName: Yup.string().required("Category name is required"),
        }),
        onSubmit: handleUserData,
    });

    return (
        <View style={styles.mainScreen}>
            <Text style={styles.text}>Product Photo</Text>
            <View style={styles.cameraContainer}>
                <Camera
                    imageoutercontainer={styles.imageoutercontainer}
                    forimage={styles.forimage}
                    showButton={true}
                    myimageurl={image}
                />
            </View>
            <View style={styles.formContainer}>
                <Text style={styles.categoryText}>Add Your Category</Text>
                <TextInput
                style={styles.textInputStyle}
                    placeholder="Enter Category name here"
                    onChangeText={formik.handleChange("categoryName")}
                    onBlur={formik.handleBlur("categoryName")}
                    value={formik.values.categoryName}
                />
                {formik.touched.categoryName && formik.errors.categoryName && (
                    <Text style={styles.errorText}>{formik.errors.categoryName}</Text>
                )}
            </View>
            <CustomButton title={isRefresing ? (<ActivityIndicator size={'small'} color={'black'} />) : (productId ? "Edit Product" : "SAVE")} onPress={formik.handleSubmit} style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    mainScreen: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(20),
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: Metrics.CountScale(10),
    },
    formContainer: {
        flex: 1,
        marginTop: Metrics.CountScale(10),
    },
    errorText: {
        color: colors.error,
        marginTop: Metrics.CountScale(5),
    },
    button: {
        marginBottom: Metrics.CountScale(20),
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
    categoryText:{
        color:colors.black,
        fontSize:Metrics.CountScale(20)
    },
    textInputStyle:{
        borderWidth:Metrics.CountScale(1.5),
        color:colors.black,
        paddingHorizontal:Metrics.CountScale(5),
        paddingVertical:Metrics.CountScale(5),
        marginVertical:Metrics.CountScale(10)
    }
});

export default EditCategory;
