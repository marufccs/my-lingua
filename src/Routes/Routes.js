import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Checkout from '../Checkout/Checkout';
import CourseDetails from '../CourseDetails/CourseDetails';
import Courses from '../Courses/Courses';
import ErrorPage from '../ErrorPage/ErrorPage';
import Faq from '../Faq/Faq';
import Home from '../Home/Home';
import Layout from '../Layout/Layout';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';


export const routes = createBrowserRouter([
        {
            path: '/',
            element: <Layout></Layout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/courses',
                    element: <Courses></Courses>,
                    loader: () =>fetch ('https://my-lingua-server-2.vercel.app/courses')
                },
                {
                    path: 'courses/:id',
                    element: <CourseDetails></CourseDetails>,
                    loader: ({params}) =>fetch (`https://my-lingua-server-2.vercel.app/courses/${params.id}`)
                },
                {
                    path: 'checkout/:id',
                    element: <PrivateRoute>
                         <Checkout></Checkout>
                    </PrivateRoute> ,
                    loader: ({params}) =>fetch (`https://my-lingua-server-2.vercel.app/courses/${params.id}`)
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
