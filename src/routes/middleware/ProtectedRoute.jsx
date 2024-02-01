import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';
import { auth } from '../../firebase-config';

const ProtectedRoute = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        // Show a loading indicator or return null while waiting for authentication state
        return null;
    }

    if (user) {
        return <>{children}</>;
    } else {
        return <Navigate to="/" />;
    }
};

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
