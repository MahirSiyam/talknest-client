import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useBookTutorsApi = () => {

    const axiosSecure = useAxiosSecure();

    const bookTutorsPromise = email => {
        return axiosSecure.get(`/bookTutors?email=${email}`).then(res => res.data)
    }

    return {
        bookTutorsPromise
    };
};

export default useBookTutorsApi;