import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        
        <nav className='bg-blue-500 w-100 flex justify-around items-center p-6'>
            <div>
                <h1 className='text-3xl font-bold'>QuizPanther</h1>
            </div>
            <div>
            <Link className='mr-12  text-2xl' to='/'>Home</Link>
            <Link className='mr-12  text-2xl' to='/statistics'>Statistics</Link>
            <Link className='mr-12  text-2xl' to='/blog'>Blog</Link>
            </div>
            
        </nav>
        
        
    );
};

export default Header;