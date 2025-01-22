import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import {
  Landing, EventForm, EventList, Error,
  HomePage
} from './pages'

import { action as eventFormAction} from './pages/EventForm'
import { loader as allEventLoader } from './pages/EventList'
import { action as deleteAction} from './pages/DeletePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element:<Landing />
      },
      {
        path: 'EventList',
        element: <EventList />,
        loader: allEventLoader,
      },
      {
        path: 'EventForm',
        element: <EventForm />,
        action: eventFormAction,
      },
      {
        path: 'delete-page/:id',
        action: deleteAction,
      },
    ]
  },
  
]);

function App() {
    return <RouterProvider router={router} />;
  };
  export default App;
  