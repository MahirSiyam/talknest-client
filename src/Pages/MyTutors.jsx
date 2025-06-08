import React, { Suspense, use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyTutorsLists from './MyTutorsLists';

const myTutorsPromise = email => {
    return fetch(`http://localhost:3000/tutorials?email=${email}`).then(res => res.json());
}

const MyTutors = () => {

    const {user} = use(AuthContext);
    // console.log(user);

    

    return (
        <div className='mt-25 mb-25 md:ml-25 lg:ml-35'>
            <Suspense fallback={<div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>}>
                <MyTutorsLists myTutorsPromise ={myTutorsPromise(user.email)}></MyTutorsLists>
            </Suspense>
        </div>
    );
};

export default MyTutors;