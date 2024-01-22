import * as yup from 'yup';
import validationMessages from '../../constants/message';

const {
    MSG_REQUIRED_PASSWORD,
    MSG_EMAIL_LENGTH,
    MSG_VALID_PASSWORD,
    MSG_USERNAME_REQ,
    PASSWORD_PATTERN,
} = validationMessages;

const validationSignInSchema = yup.object({
    username: yup
        .string()
        .required(MSG_USERNAME_REQ)
        .max(254, MSG_EMAIL_LENGTH),
    password: yup
        .string()
        .required(MSG_REQUIRED_PASSWORD)
        .matches(PASSWORD_PATTERN, MSG_VALID_PASSWORD),
})

const validationSignUpSchema = yup.object({
    fullName: yup
        .string()
        .required('Name is required'),

    username: yup
        .string()
        .required('Username is required'),

    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),

    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),

    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
})

export {
    validationSignInSchema,
    validationSignUpSchema
};