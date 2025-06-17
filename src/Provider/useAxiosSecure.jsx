import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import Swal from 'sweetalert2';

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
                Swal.fire({
                            title: "Logout!",
                            icon: "success",
                            draggable: true,
                          });
            })
            .catch(() => {
                Swal.fire({
                            title: "error!",
                            icon: "error",
                            draggable: true,
                          });
            })
        }
        return Promise.reject(error)
    })
    return axiosInstance;
};

export default useAxiosSecure;