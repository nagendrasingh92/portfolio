import axios from 'axios';

const client = () => {
    const defaultOptoins = {
        headers: {},
    };
    const API = axios.create({
        baseURL: process.env.REACT_APP_PRODUCTS,
    });
    API.interceptors.response.use(
        (response) => response,
        (error) => {
            const { 
                response: { 
                    status
                } = {}
            } = error;
            if(status === 401){
                window.localStorage.clear();
                window.sessionStorage.clear();
                window.location.href = '/'; 
            }
            return error.response;
        }
    );
    return {
        get: (url, data, options = {}) => API.get(url, data, { ...defaultOptoins, ...options }),
        post: (url, data, options = {}) => API.post(url, data, { ...defaultOptoins, ...options}),
        patch: (url, data, options = {}) => API.patch(url, data, { ...defaultOptoins, ...options}),
        put: (url, data, options = {}) => API.put(url, { ...defaultOptoins, ...options}),
        delete: (url, options = {}) => API.delete(url, { ...defaultOptoins, ...options}),
    };
};

export default client;