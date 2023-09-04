
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import * as Yup from 'yup';

import "./formDetails.css";
import { FormWrapper, FormTitle, FormField, CheckboxContainer, FormError } from "./FormDetailsStyle";
import Button from "components/Button/Button";
import { addUser, fetchPlace } from "service/api";
import CustomSelectProps from "./CustomSelect";



function FormDetails() {
  const [autocompleteCities, setAutocompleteCities] = useState([]);

  useEffect(() => {
    fetchPlace().then(setAutocompleteCities);
  },[])


  const validationSchema = yup.object().shape({
    fullName: Yup.string().required('This is a mandatory field'),
    email: Yup.string().required('This is a mandatory field').email('Email is invalid'),
    phoneNumber: Yup.string()
    .matches(/^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/, "Phone number is not valid")
    .required("This is a mandatory field"),
    city: Yup.string().required('This is a mandatory field'),
    check: Yup.bool().oneOf([true], 'This is a mandatory field'),
  }) 

  const formik = useFormik({
    initialValues: {fullName: '', phoneNumber: '', email: '', city: '', check: false},
    validationSchema,
    onSubmit: value => {
        addUser(value).then(() => {
            navigate("/congratulation-page");
        })
    }
  })
  const navigate = useNavigate();


  return (
    <>
        <FormTitle>Leave details</FormTitle>
        <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
            <FormField
                type="text"
                name="fullName"
                value={formik.values.fullName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Full Name"
            />
            <FormError>{formik.errors?.fullName && formik.errors.fullName}</FormError>
            <FormField
                type="phone"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <FormError>{formik.errors?.phoneNumber && formik.errors.phoneNumber}</FormError>
            <FormField
                placeholder="Email" 
                type="email" 
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <FormError>{formik.errors?.email && formik.errors.email}</FormError>
                <CustomSelectProps 
                    autocompleteCities={autocompleteCities}
                    onChange={formik.handleChange} 
                />
                <FormError>{formik.errors?.city && formik.errors.city}</FormError>
            <CheckboxContainer>
                <input
                    name="check"
                    type="checkbox"
                    value={formik.values.check}
                    onChange={formik.handleChange} 
                />
                <label htmlFor="acceptTerms">
                    I agree to Johnny Tec terms of use &<br/> privacy policy
                </label>
            </CheckboxContainer>
            <FormError>{formik.errors?.check && formik.errors.check}</FormError>
                <Button style={{ marginTop: '20px' }} type="button">Save</Button>

        </form>
        </FormWrapper>
    </>
  );
}

export default FormDetails;

