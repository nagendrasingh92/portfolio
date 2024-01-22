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

export {
    validationSignInSchema,
};