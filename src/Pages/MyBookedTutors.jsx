import React, { Suspense, use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyBookedTutorsCard from './MyBookedTutorsCard';
import useBookTutorsApi from '../Provider/usBookTutorsApi';

// const bookTutorsPromise = (email , accessToken) => {
//     return fetch(`https://talknest-server.vercel.app/bookTutors?email=${email}` , {
//         headers: {
//             authorization: `Bearer ${accessToken}`
//         }
//     }).then(res => res.json())
// }

const MyBookedTutors = () => {
    const {user} = use(AuthContext);
    const {bookTutorsPromise} = useBookTutorsApi();

    console.log('token in the context', user.accessToken);

    return (
        <div>
            <title>My Booked Tutors</title>
            <Suspense fallback ={<div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>}>
                <MyBookedTutorsCard bookTutorsPromise={bookTutorsPromise(user.email)}></MyBookedTutorsCard>
            </Suspense>
        </div>
    );
};

export default MyBookedTutors;