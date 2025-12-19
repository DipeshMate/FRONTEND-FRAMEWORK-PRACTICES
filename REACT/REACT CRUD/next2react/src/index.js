import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, Route, RouterProvider, Link} from 'react-router-dom'
 import './index.css';
import App from './App';


const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Link to="/"><App /></Link>,
            children: [
                {
                    path: 'home',
                    element: <App />
                },
                {
                    path: 'about',
                    element: <h1>About the App</h1>
                },
                {
                    path: '*',
                    element: <h1>Page Not Found</h1>
                }
            ]
        },
        {
            path: '/contact',
            element: <h1>Contact Us</h1>
        },
        {
            path: '*',
            element: <h1>Page Not Found</h1>
        }
    ]
 )

const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(
     <RouterProvider router={router} />
);




