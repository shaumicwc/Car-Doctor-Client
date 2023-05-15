import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import BookService from '../Pages/BookService/BookService';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoute from './PrivateRoute';


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path: 'signup', 
          element: <SignUp/>,
      },
      {
        path: 'book/:id', 
        element: <BookService/>,
        loader: ({params}) => fetch(`https://car-doctor-server-2.vercel.app/services/${params.id}`)
      },
      {
        path: 'bookings', 
        element: <PrivateRoute><Bookings/></PrivateRoute>
      }
      ]
    },
  ]);

export default router;