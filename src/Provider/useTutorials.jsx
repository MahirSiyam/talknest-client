import React from 'react';
import useAxiosSecure from './useAxiosSecure';

const useTutorials = () => {

    const axiosSecure = useAxiosSecure();

    const myTutorsPromise = email => {
        return axiosSecure.get(`/tutorials?email=${email}`).then(res => res.data);
    }

    return {
        myTutorsPromise
    };
};

export default useTutorials;