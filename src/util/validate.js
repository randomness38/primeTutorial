// validate example 찾아봐야 겠다
// 아래 예시들은 어떻게 굴려먹을 수 있을까

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.email) {
        errors.email = 'Required';
    }

    return errors;
};

export default validate;


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
