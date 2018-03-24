import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';
import renderField from './renderField';
import RemoteSubmitButton from "../util/RemoteSubmitButton";

const WizardFormFirstPage = () => {
    return (
        <View>
            <Field
                name="deckTitle"
                type="text"
                component={renderField}
                label="Deck Title"
            />
            <View>
                <RemoteSubmitButton/>
            </View>
        </View>
    );
};

export default reduxForm({
    form: 'deckForm', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormFirstPage);
