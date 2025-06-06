import React, { Suspense, use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyBookedTutorsCard from './MyBookedTutorsCard';

const bookTutorsPromise = (email) => {
    return fetch(`http://localhost:3000/bookTutors?email=${email}`).then(res => res.json())
}

const MyBookedTutors = () => {

    const {user} = use(AuthContext);

    return (
        <div>
            <Suspense fallback ={<div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>}>
                <MyBookedTutorsCard bookTutorsPromise={bookTutorsPromise(user.email)}></MyBookedTutorsCard>
            </Suspense>
        </div>
    );
};

export default MyBookedTutors;