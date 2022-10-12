import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        
        <nav className='bg-blue-500 flex flex-col md:flex-row md:space-x-8 md:justify-around p-8'>
        
            <div >
                <h1 className='text-3xl font-bold m-2'>QuizPanther</h1>
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