import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ContactInput } from "./ContactInput";
import validate from "../util/validate";
import asyncValidate from "../util/asyncValidate";
import RemoteSubmitButton from "../containers/RemoteSubmitButton";
import {CONTACT_FORM} from "../util/FormNames";

// import submit from "../../submit";

// //Validation
// const required = value => value ? undefined : 'Required';
// const maxLength15 = value => value && value.length > 15 ? `Must be 15 characters or less` : undefined;
// const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
// const minValue = min => value =>
//     value && value < min ? `Must be at least ${min}` : undefined;
// const minValue18 = minValue(18);
// const isValidEmail = value =>
//     value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;
// //Warning
// const over70YearsOld = value =>
//     value && value > 70 ? 'You might be too old for using this' : undefined;
// const isYahooMail = value =>
//     value && /.+@yahoo\.com/.test(value) ?'Really? You still use yahoo mail ?' : undefined;
//


const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);
}

const DumbContactForm = (props) => {
    // Stateless Component 로 props 를 다운도킹 받는데
    // handleSubmit 은 DumbForm -> ReduxForm 으로 변환 할 때 도킹되는 reduxForm method !
    // submit 메소드에는 value 를 받아서 커스텀하는 코드를 세팅
    const { handleSubmit, submitting, reset } = props;
    return (
        <View style={styles.container}>
            <Text>Prim Tutorial : Redux Form</Text>
            <Text>username: must be hoang, hoangnd, or ndhoang</Text>
            <Text>email: must be sunlight4d@gmail.com</Text>
            <Field  name='username' keyboardType='default' label='user name : ' component={ContactInput} placeholder="Enter name"
                    // validate={[required, maxLength15]}
            />
            <Field  name='email' keyboardType='email-address' label='Email: ' component={ContactInput} placeholder="Enter Email"
                    // validate={isValidEmail}
                    // warn={isYahooMail}
            />
            <Field  name='age' keyboardType='numeric' label='Age: ' component={ContactInput} placeholder="Enter age"
                    // validate={[required, number, minValue18]}
                    // warn={over70YearsOld}
            />
            <RemoteSubmitButton/>

            {/*<TouchableOpacity onPress={handleSubmit(submit)} disabled={submitting}>*/}
                {/*<Text>Submit</Text>*/}
            {/*</TouchableOpacity>*/}

            {/*<TouchableOpacity onPress={reset} disabled={submitting}>*/}
                {/*<Text>Clear</Text>*/}
            {/*</TouchableOpacity>*/}

        </View>
    )
}

// RedexForm 으로 변환할 때 form 이름 , validate 메소드 , warn 메소드를 함께 도킹
const ReduxContactForm = reduxForm({
    form: CONTACT_FORM, // a unique identifier for this form
    validate,
    asyncValidate,
    asyncBlurFields: ['username'],
    onSubmit: submit
})(DumbContactForm);


export default ReduxContactForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
