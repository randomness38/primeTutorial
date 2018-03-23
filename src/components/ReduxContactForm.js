import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { ContactInput } from "./ContactInput";



const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 20) {
        errors.username = 'username must be less than or equal 20 characters'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Age must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'You must be at least 18 years old'
    }
    return errors
}
const warn = values => {
    const warnings = {};
    if (values.age < 19) {
        warnings.age = 'You seem a bit young...'
    }
    return warnings
}


const submit = values => {
    alert(`Validation success. Values = ~${JSON.stringify(values)}`);
}

const DumbContactForm = (props) => {
    // Stateless Component 로 props 를 다운도킹 받는데
    // handleSubmit 은 DumbForm -> ReduxForm 으로 변환 할 때 도킹되는 reduxForm method !
    // submit 메소드에는 value 를 받아서 커스텀하는 코드를 세팅
    const { handleSubmit } = props;
    return (
        <View>
            <Text>Prim Tutorial : Redux Form</Text>
            <Field  name='username' keyboardType='default' label='user name : ' component={ContactInput}/>
            <Field  name='email' keyboardType='email-address' label='Email: ' component={ContactInput}/>
            <Field  name='age' keyboardType='numeric' label='Age: ' component={ContactInput}/>
            <TouchableOpacity onPress={handleSubmit(submit)}>
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}

// RedexForm 으로 변환할 때 form 이름 , validate 메소드 , warn 메소드를 함께 도킹
const ReduxContactForm = reduxForm({
    form: 'contact', // a unique identifier for this form
    validate,                // <--- validation function given to redux-form
    warn
})(DumbContactForm);

export default ReduxContactForm;
