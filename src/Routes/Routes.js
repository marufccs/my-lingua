import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Courses from '../Courses/Courses';
import Faq from '../Faq/Faq';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import Register from '../Register/Register';


export const routes = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>
                },
                {
                    path: '/faq',
                    element: <Faq></Faq>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
            ]
        }
    ])
    const Routes = () => {
    return (
        <div>
            
        </div>
    );
};

export default Routes;
