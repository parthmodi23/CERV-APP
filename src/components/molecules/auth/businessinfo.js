import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import FormInput from '../../atoms/commonforminput/forminput'
import Camera from '../../atoms/camera'
import { Form, Formik } from 'formik'
import { collection } from 'firebase/firestore'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import colors from '../../../constants/colors'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as Yup from 'yup'
const Businessinfo = () => {
  return (
    <View style={styles.mainscreen}>
      <Text style={styles.headingtext}>Business info</Text>
      <Formik
        const initialValues={{
          licenceNumber: '',
          address: '',
          bio: ''
        }}

        validationSchema={Yup.object().shape({
          licenceNumber: Yup.number().required("license number is required").min(12, "require 12 digits"),
          address: Yup.string().required("address field can not be empty"),
          bio: Yup.string().required("bio is require")
        })}

        onSubmit={(values) => {
          console.log(values)
        }
        }
      >
        {({ handleSubmit,handleChange,handleBlur,values }) => (
          <View>
            <FormInput
              placeholder={"License Number"}
              headingname={"Business License Number"}
              onChange={handleChange('licenceNumber')}
              onBlur={handleBlur('licenseNumber')}
              values={values.licenceNumber}
            />
            <Text style={styles.text}>Business Licanse Photo</Text>
            <Camera
              imageoutercontainer={styles.imageoutercontainer}
              forimage={styles.forimage}
              showButton={false}
            />
            <FormInput
              headingname={"Address"}
              placeholder="Address"
              onChange={handleChange('address')}
              onBlur={handleBlur('address')}
              values={values.address}
              sideiconsecond={'location-outline'}
              oniconpressed={""}
            />
            <FormInput
              placeholder={"Tell me about your Business"}
              headingname={"Bio"}
              onChange={handleChange('bio')}
              onBlur={handleBlur('bio')}
              values={values.bio}
              multiline={true}
            />

          </View>
        )}
      </Formik>
    </View>
  )
}

const styles = StyleSheet.create({
  mainscreen: {
    margin: 10
  },
  text: {
    marginVertical: 5,
    color: colors.lighttextcolor,
    fontWeight: 'bold'
  },
  headingtext: {
    fontSize: 20
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
  }
})

export default Businessinfo
