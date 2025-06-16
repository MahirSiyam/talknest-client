import React, { Suspense, use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyTutorsLists from './MyTutorsLists';
import useTutorials from '../Provider/useTutorials';

// const myTutorsPromise = (email , accessToken) => {
//     return fetch(`https://talknest-server.vercel.app/tutorials?email=${email}` , {
//         headers: {
//             authorization: `Bearer ${accessToken}`
//         }
//     }).then(res => res.json());
// }

const MyTutors = () => {

    const {user} = use(AuthContext);
    // console.log(user);

    const {myTutorsPromise} = useTutorials();

    return (
        <div className='mt-22 mb-22 w-5/6 mx-auto'>
            <title>My Tutors</title>
            <Suspense fallback={<div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>}>
                <MyTutorsLists myTutorsPromise ={myTutorsPromise(user.email)}></MyTutorsLists>
            </Suspense>
        </div>
    );
};

export default MyTutors;