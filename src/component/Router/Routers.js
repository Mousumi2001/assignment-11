import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';

const Routers = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/courses',
                    element: <Courses></Courses>,
                    loader: () => fetch('http://localhost:5000/tutorial')
                },
                {
                    path: '/faq',
                    element: <FAQ></FAQ>,
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/login',
                    element: <SignIn></SignIn>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                // {
                //     path: '/courses/:id',
                //     element: <Cart></Cart>
                // }
            ]
        },
        {
            path: '*',
            element: <div><h1 className='text-5xl'>4O4 page</h1></div>
        }
    ])
    return (
        <div>
            <RouterProvider router={router}>

            </RouterProvider>
        </div>
    );
};

export default Routers;