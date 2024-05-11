import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextInput } from "react-native-paper";
import CustomButton from "../../atoms/buttoncomponent/button";
import Metrics from "../../../assests/Metrics";
import colors from "../../../constants/colors";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useSelector, useDispatch } from "react-redux";
import * as menuAction from '../../../redux/actions/caterer/menu'
import { useNavigation } from "@react-navigation/native";
import Camera from "../../atoms/camera";

const EditCategory = () => {
    const [error, setError] = useState(null);
    const [isRefresing, setIsRefresing] = useState(false);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const imageUrl = useSelector(state => state.auth.profilefilepath);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: 'Add Category',
            headerTitleAlign: 'center',
        });
    }, []);

    const handleUserData = async (values) => {
        const catererData = {
            name: values.categoryName,
            image: {
                uri: imageUrl,
                type: 'image/jpeg',
                name: 'photo.jpg',
            }
        }
        let formData = new FormData()
        for (let key in catererData) {
            formData.append(key, catererData[key])
        }
        
         setIsRefresing(true);
        try {
            const data = await dispatch(menuAction.postAdminCategorie(formData));
            setError(false);
            console.log("screen log", data);
            if(data.success){
                Alert.alert('Category added Successfully')
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
            categoryName: "",
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
                />
            </View>
            <View style={styles.formContainer}>
                <TextInput
                    placeholder="Enter Category name here"
                    onChangeText={formik.handleChange("categoryName")}
                    onBlur={formik.handleBlur("categoryName")}
                    value={formik.values.categoryName}
                />
                {formik.touched.categoryName && formik.errors.categoryName && (
                    <Text style={styles.errorText}>{formik.errors.categoryName}</Text>
                )}
            </View>
            <CustomButton title="SAVE" onPress={formik.handleSubmit} style={styles.button} />
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
        marginTop: Metrics.CountScale(10),
    },
    errorText: {
        color: colors.error,
        marginTop: Metrics.CountScale(5),
    },
    button: {
        marginTop: Metrics.CountScale(20),
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
});

export default EditCategory;
