import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import PrivateRouter from '../../PrivateRouter/PrivateRouter';
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
                    element: <PrivateRouter><Blog></Blog></PrivateRouter>
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
            element: <div className='flex justify-center pt-48'><h1 className='text-8xl'>4O4 page</h1></div>
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