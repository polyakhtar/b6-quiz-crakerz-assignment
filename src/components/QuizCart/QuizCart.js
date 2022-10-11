import React from 'react';

const QuizCart = ({quizcart}) => {
    const {name,logo,total}=quizcart;
    return (
        
            
        <div className='border rounded-md bg-blue-50 m-8 p-4'>
            <div className='bg-blue-200'>
            <img src={logo} alt=""/>
            </div>
            <div className='m-2'>
            <h2 className='text-2xl'>{name}</h2>
            <h2>Total Quiz : {total}</h2>
            <button className='text-2xl bg-blue-500 rounded-md px-3 py-2 mt-2 font-semibold'>Start Quiz</button>

            </div>
        </div>
        
        
    );
};

export default QuizCart;