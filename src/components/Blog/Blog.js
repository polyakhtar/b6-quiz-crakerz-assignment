import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='w-50 border-2 border-indigo-600 rounded-md m-6 p-6'>
            <h2 className='text-3xl font-bold mb-2'>Q-1. What is the purpose of react router?</h2>
            <p className='text-2xl font-semibold'><span className='font-bold'>Ans:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='w-50 border-2 border-indigo-600 rounded-md m-6 p-6'>
            <h2 className='text-3xl font-bold mb-2'>Q-2. How does context API works?</h2>
            <p className='text-2xl font-semibold'><span className='font-bold'>Ans:</span> The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='w-50 border-2 border-indigo-600 rounded-md m-6 p-6'>
            <h2 className='text-3xl font-bold mb-2'>Q-3. What is useRef Hook in react?</h2>
            <p className='text-2xl font-semibold'><span className='font-bold'>Ans:</span>The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.
            It can be used to access a DOM element directly.If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.To avoid this, we can use the useRef Hook.</p>
                        </div>
        </div>
    );
};

export default Blog;