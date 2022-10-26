import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import Blog from '../Blog/Blog';
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
                    element: <Courses></Courses>
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
            ]
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