import React from 'react';
import { Text, View, Button,TouchableOpacity } from 'react-native';
import renderField from './renderField'
import { Field, reduxForm } from 'redux-form';
import validate from '../util/validate';

const submit = values => {
    alert(`Validation success. Values = ${JSON.stringify(values)}`);
}

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props;
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', width: 200, textAlign: 'center', margin: 10 }}>Redux-form example</Text>
            <Text>This is first Page</Text>
            <Field name="age" keyboardType="numeric" label="Age:" placeholder="Age" component={renderField}
            />
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={previousPage} style={{ margin: 10, alignItems: 'center' }}>
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Back page -></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSubmit(submit)} style={{ margin: 10, alignItems: 'center' }}
                                  disabled={submitting}
                >
                    <Text style={{
                        backgroundColor: 'steelblue', color: 'white', fontSize: 16,
                        height: 37, width: 120, textAlign: 'center', padding: 10
                    }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default reduxForm({
    form: 'wizard', //                 <------ same form name
    destroyOnUnmount: false, //        <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate,
})(WizardFormThirdPage);
