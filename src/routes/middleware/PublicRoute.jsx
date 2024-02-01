import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import Snackbar from '@mui/material/Snackbar';
import PropTypes from 'prop-types';
import { auth } from '../../firebase-config';

const PublicRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openToast, setOpenToast] = useState({ status: false, message: '', type: '' });
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);

        });
        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (user) {
            setOpenToast({ status: true, message: 'Please Signin', type: 'success' });
        }
    }, [user]);

    const handleToast = () => {
        setOpenToast({ status: false, message: '', type: '' })
    }

    if (loading) {
        // Show a loading indicator or return null while waiting for authentication state
        return null;
    }
    if (user) {
        return (<>
            <div style={{ position: 'absolute', top: '0', right: '0' }}>
                <Snackbar
                    open={openToast.status}
                    autoHideDuration={6000}
                    onClose={handleToast}
                    message={openToast.message}
                />
            </div>

            <Navigate to="/" />
        </>);

    } else {
        return <>{children}</>;
    }
};

PublicRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PublicRoute;
