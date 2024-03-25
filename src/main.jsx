import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import Root from './components/Root/Root.jsx';

const router = createBrowserRouter([

    {
      path: "/",
     element: <Root></Root>,
     children: [
      {
        path: '/',
        loader: ()=> fetch('data.json'),
        element:<Home></Home>,
      },
      {
        path: '/listedbooks',
        element:<ListedBooks></ListedBooks>,
      },
      {
        path: '/pagesread',
        element:<PagesRead></PagesRead>,
      },
     ]
    },
    
      
    
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
