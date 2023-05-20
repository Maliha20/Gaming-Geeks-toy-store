import React from 'react';
import gif from '../../assets/chessgoat.gif'
import { Link, useRouteError } from 'react-router-dom'
import useTitle from '../../hooks/useTitle';

const Error = () => {
    useTitle('Error')
    const { error, status } = useRouteError()
    return (
        <div className='flex justify-center items-center h-screen p-16 bg-stone-200 text-gray-900'>
        <div className='flex flex-col items-center justify-center my-8'>
             <img className='w-full h-1/2' src={gif} alt="" />

            <div className='max-w-md text-center'>
                <h2 className='mb-8 font-extrabold text-9xl text-gray-600'>
                    <span className='sr-only'>Error</span> {status || 404}
                </h2>
                <p className='text-2xl font-semibold md:text-3xl mb-8'>
                    {error?.message}
                </p>
                <Link
                    to='/'
                    className='px-6 py-4 my-8 font-semibold rounded bg-yellow-800 text-amber-50'
                >
                    Let's go home
                </Link>
            </div>
        </div>
    </div>
    );
};

export default Error;