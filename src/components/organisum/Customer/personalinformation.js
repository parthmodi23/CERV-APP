import React from 'react'
import * as Yup from 'yup'
import FormInput from '../../atoms/commonforminput/forminput'
import CustomButton from '../../atoms/buttoncomponent/button'

const PersonalInformation = () => {

    const [phonenumber, setPhonenumber] = useState('')

  return (
<View>
    <Formik
    const initialValues={{
        username:'',
        email:'',
        phonenumber:'',
        address:'',
    }}
    validationSchema={Yup.object().shape({
        //for all the feilds proper validation will apply in last
        username:Yup.string().required("Use name is require"),
        email: Yup.string().email('Invalid email').required('Required'),
        phonenumber : Yup.number().required("phone number is require"),
        address:Yup.string().required("address is require")
    })}
    onSubmit={()=>{

    }}
    >

{({handleSubmit})=>(
        <View>
        <FormInput
        headingname={"Emai"}
        />
        <FormInput/>
        <View style={styles.phonenumbercontainer}>

                        <Text style={styles.phonetext}>Phone Number</Text>
                        <View>
                            <PhoneInput
                                defaultValue={phonenumber}
                                onChangeFormattedText={(text) => setPhonenumber(text)}
                                defaultCode='IN'
                                containerStyle={styles.phonenumber}
                                textInputProps={{ maxLength: 10 }}
                                textContainerStyle={{}}
                                countryPickerButtonStyle={{}}
                                countryPickerProps={{}}
                                textInputStyle={{}}
                                flagButtonStyle={{}}
                                layout='second'
                            />
                        </View>
        <FormInput/>
        <CustomButton title={"SAVE"} onPress={handleSubmit}/>
        </View>  
        </View>
    )}



    </Formik>

</View>
  )
}

export default PersonalInformation
