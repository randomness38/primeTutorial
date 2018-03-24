import React from 'react';
import { connect } from 'react-redux';
import { submit } from 'redux-form';
import { Text, TouchableOpacity } from 'react-native';
import {CONTACT_FORM} from "../util/FormNames";

const RemoteSubmitButton = ({ dispatch }) => {
    return (
        <TouchableOpacity onPress={ () => dispatch(submit(CONTACT_FORM)) }>
            <Text>Submit</Text>
        </TouchableOpacity>
    );
};

export default connect()(RemoteSubmitButton);
