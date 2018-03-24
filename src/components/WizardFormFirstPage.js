import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity, Button } from 'react-native';

import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';
import renderField from './renderField';

const WizardFormFirstPage = props => {
    const { handleSubmit } = props;
    return (
        <View>
            <Field
                name="firstName"
                type="text"
                component={renderField}
                label="First Name"
            />
            <Field
                name="lastName"
                type="text"
                component={renderField}
                label="Last Name"
            />
            <View>
                <Button onPress={handleSubmit} title='next'/>
            </View>
        </View>
    );
};

export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormFirstPage);
