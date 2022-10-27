//try a new ----second
// import React from 'react';
// import { Link, Outlet, useLoaderData } from 'react-router-dom';

// const Courses = () => {
//     const courses = useLoaderData();
//     return (
//         <div>
//             <div className='bg-red-300  w-1/4 h-screen text-center text-xl'>
//                 {
//                     courses.map(course => <p key={course.id}>
//                         <button className="btn glass m-3 "><Link>{course.name}</Link></button>
//                     </p>)
//                 }
//             </div>
//             <div className='w-3/4 grid grid-cols-2 gap-5 pt-5 pl-16'>
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Courses;




















//try a new ------first

import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='lg:flex'>
            <div className='bg-red-300 sm:w-screen  lg:w-1/4 lg:h-screen text-center text-xl'>
                {
                    courses.map(course => <p key={course.id}>
                        <button className="btn glass m-3 "><Link to='/cartDetails'>{course.name}</Link></button>
                    </p>)
                }

            </div>
            <div className='lg:w-3/4 grid lg:grid-cols-2 gap-5 pt-5 lg:pl-16'>

                {
                    courses.map(course => <Cart key={course.id} course={course}></Cart>)
                }
            </div>
        </div>
    );
};

export default Courses;