import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';

const axiosInstance = axios.create({
    baseURL: 'https://talknest-server.vercel.app'
})

const useAxiosSecure = () => {

    const {user , logOut} = use(AuthContext);

    axiosInstance.interceptors.request.use(config => {
        config.headers.Authorization = `Bearer ${user.accessToken}`
        return config;
    });

    // response interceptor
    axiosInstance.interceptors.response.use(response => {
        return response;
    } , error => {
        
        if(error.status === 401 || error.status === 403)
        {
            logOut()
            .then(() => {
                console.log('log out');
            })
            .catch(err => {
                console.log(err);
            })
        }
        return Promise.reject(error)
    })
    return axiosInstance;
};

export default useAxiosSecure;