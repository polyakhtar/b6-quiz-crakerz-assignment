import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCart from '../QuizCart/QuizCart';
import './Home.css'

const Home = () => {
    const quizes=useLoaderData().data;
    
    return (
    <div>
           
           <div className='background-image-container'>
               <div className='text-white p-40'>
               <h1 className='text-4xl font-bold mb-4'>ARE YOU WANT TO CHECK YOUR SKILL ?</h1>
               <div className='mt-4'>
               <p>This is the platform by which you will test your skill and develop your skill.</p>
               <p>
                In the present world skill is very important to survive modern world.</p>
                </div>
               </div>
            </div>
                    
        <div className='grid lg:grid-cols-4'>
{
    quizes.map(quizcart=><QuizCart
    key={quizcart.id}
    quizcart={quizcart}
    ></QuizCart>)
}

        </div>
        
        
        </div>                 
        
    );
};

export default Home;