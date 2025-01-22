import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react'
import {
  Landing, EventForm, EventList, Error,
  HomePage, EditPage
} from './pages'

import { action as eventFormAction} from './pages/EventForm'
import { loader as allEventLoader } from './pages/EventList'
import { action as deleteAction} from './pages/DeletePage'
import { action as editAction } from './pages/EditPage'
import { loader as editLoader } from './pages/EditPage'

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
        path: 'edit-job/:id',
        element: <EditPage />,
        loader: editLoader,
        action: editAction,
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
  