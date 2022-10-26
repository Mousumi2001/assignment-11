import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='flex'>
            <div className='bg-red-300  w-1/4 h-screen text-center text-xl'>
                {
                    courses.map(course => <p key={course.id}>
                        <Link>{course.name}</Link>
                    </p>)
                }

            </div>
            <div className='w-3/4 grid grid-cols-2 gap-5 pt-8 pl-16'>
                {
                    courses.map(course => <Cart key={course.id} course={course}></Cart>)
                }
            </div>
        </div>
    );
};

export default Courses;