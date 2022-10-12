import React from 'react';
import { Link } from 'react-router-dom';
import './QuizCart.css';


const QuizCart = ({quizcart}) => {
    const {name,logo,total,id}=quizcart;
    return (
        
            
        <div className='border rounded-md bg-blue-50 m-8 p-4'>
            <div className='bg-blue-200'>
            <img src={logo} alt=""/>
            </div>
            <div className='m-2'>
            <h2 className='text-2xl'>{name}</h2>
            <h2 className='mb-4'>Total Quiz : {total}</h2>
            <Link className='quiz-button' to={`/quizcart/${id}`}>Start Quiz</Link>

            </div>
        </div>
        
        
    );
};

export default QuizCart;