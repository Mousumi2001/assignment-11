import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../../layout/Main';
import PrivateRouter from '../../PrivateRouter/PrivateRouter';
import Blog from '../Blog/Blog';
import Cart from '../Cart/Cart';
import CartDetails from '../Cart/CartDetails';
import Courses from '../Courses/Courses';
import FAQ from '../FAQ/FAQ';
import Home from '../Home/Home';
import Register from '../Register/Register';
import SignIn from '../SignIn/SignIn';

const Routers = () => {

    const router = createBrowserRouter([
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>,
                    loader: () => fetch('https://assignment-10-server-cyan.vercel.app/tutorial'),
                    children: [

                    ]
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
                {
                    path: '/cartDetails',
                    element: <CartDetails></CartDetails>,
                    loader: () => fetch('https://assignment-10-server-cyan.vercel.app/tutorial')
                }
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