import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css'


const Home = () => {
    const quiz=useLoaderData();
    console.log(quiz.data[0].name);
    return (
        <div>           
            <div className='background-image-container'>
               <div className='text-white m-40 p-8'>
               <h1 className='text-4xl font-bold mb-4'>ARE YOU WANT TO CHECK YOUR SKILL?</h1>
               <div className='mt-4'>
               <p>This is the platform by which you will test your skill and develop your skill.</p>
               <p>
                In the present world skill is very important to survive modern world.</p>
                </div>
               </div>
            </div>
            <div>
                <h1>quiz:{quiz.data.name}</h1>
            </div>
        </div>
        
            
        
                
        
    );
};

export default Home;