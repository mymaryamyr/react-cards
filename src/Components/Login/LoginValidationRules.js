export default function validate(values) {
    let errors = {};
    if (!values.email) {
        errors.email = 'Email address is required';
    } if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    } if (!values.name) {
        errors.name = 'Name is required';
    } else if (!/([1-zA-Z0-1@.\s]{1,255})$/.test(values.name)) {
        errors.name = 'Name is invalid';

    }
    return errors;
}