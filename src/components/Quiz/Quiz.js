
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEye } from '@fortawesome/free-solid-svg-icons';

const Quiz = ({quiz,number}) => {

    const {question,correctAnswer}=quiz;
    console.log(correctAnswer)
            const answer=correctAnswer=>{
                alert(correctAnswer)
            };
            const test=(e)=>{
                if(e===correctAnswer){
                    alert('Your answer is Correct')
                 }else{
                     alert('Your answer is wrong')
            }
        }              
    //  console.log(quiz.correctAnswer)
    return (
        <div className='border rounded-lg bg-blue-50 m-6 p-6'>
            
                <div>
                <h2>Question No- {number+1} {question}</h2>
                </div>
                <div>
                <button onClick={()=>answer(correctAnswer)}><FontAwesomeIcon className='text-blue-600 text-2xl m-2' icon={faEye}></FontAwesomeIcon></button>
            

            </div>
            <div className=''>
                {
                    quiz.options.map(option=>
<label className='options flex m-2' onClick={()=>test(option)} htmlFor="">
    <input className='mr-6' type="radio" name='action' />
    <p>{option}</p>

</label>
)
    }
            </div>
            
        </div>
    );
};

export default Quiz;