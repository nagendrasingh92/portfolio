// userThunks.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../firebase-config';
import { doc, setDoc } from '@firebase/firestore';

// Async thunk to register a user
export const registerUser = createAsyncThunk(
    'adminPortal/registerUser',
    async ({ email, password }) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;
            console.log('user', user);
            const { uid } = userCredential.user;
            await setDoc(doc(db, 'users', uid), {
                email: email,
                password: password,
            })
            return user;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
);
