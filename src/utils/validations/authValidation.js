import * as yup from 'yup';
import validationMessages from '../../constants/message';

const {
    MSG_EMAIL_LENGTH,
    MSG_USERNAME_REQ,
} = validationMessages;

const validationSignInSchema = yup.object({
    username: yup
        .string()
        .required(MSG_USERNAME_REQ)
        .max(254, MSG_EMAIL_LENGTH),
    password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .required('Password is required'),
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

const validationContactSchema = yup.object({
    guestName: yup
        .string()
        .required('Name is required'),
    message: yup
        .string()
        .required('Message is required'),
    email: yup
        .string()
        .email('Invalid email address')
        .required('Email is required'),
})
const validationTaskFormSchema = yup.object({
	taskTitle: yup
		.string()
		.required('Name is required'),
	taskDescription: yup
		.string()
		.required('Name is required'),
	startDate: yup
		.date()
		.min(new Date(), 'Start date must be in the future'),
	endDate: yup
		.date()
		.min(
			yup.ref('startDate'),
			"end date can't be before start date"
		),
})



export {
    validationTaskFormSchema,
    validationContactSchema,
    validationSignInSchema,
    validationSignUpSchema
};