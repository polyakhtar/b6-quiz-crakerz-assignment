import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const QuizDetails = () => {
    const quizOption=useLoaderData().data;
    const quastions=(quizOption.questions);

    return (
        
            <div>
                
                    <h2 className='text-3xl font-semibold m-6 '>Category of quiz : {quizOption.name}</h2>
                
                <div>
             {
           quastions.map((quiz,number)=><Quiz
             key={quiz.id}
             quiz={quiz}
             number={number}
             ></Quiz>)
            }
                </div>

            </div>
        
    );
};

export default QuizDetails;