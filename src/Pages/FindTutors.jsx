import React, { use } from 'react';
import TutorsCard from '../Components/TutorsCard';
const tutorialsPromise = fetch("http://localhost:3000/tutorials").then(res => res.json());

const FindTutors = () => {

    const tutorials = use(tutorialsPromise);

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 w-11/12 mx-auto mt-2 mb-2 p-5'>
            {
                tutorials.map(tutorial => <TutorsCard key={tutorial._id} tutorial= {tutorial}></TutorsCard>)
            }
        </div>
    );
};

export default FindTutors;