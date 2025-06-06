import React, { Suspense, use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import MyTutorsLists from './MyTutorsLists';

const myTutorsPromise = email => {
    return fetch(`http://localhost:3000/tutorials?email=${email}`).then(res => res.json());
}

const MyTutors = () => {

    const {user} = use(AuthContext);
    console.log(user);

    return (
        <div>
            <Suspense fallback={<div className='max-h-screen flex justify-center items-center mt-35 mb-35'>
                  <span className="loading loading-bars loading-xl"></span>
               </div>}>
                <MyTutorsLists myTutorsPromise ={myTutorsPromise(user.email)}></MyTutorsLists>
            </Suspense>
        </div>
    );
};

export default MyTutors;