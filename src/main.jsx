import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from 'react-hot-toast';

import Home from './components/Home/Home.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';
import PagesRead from './components/PagesRead/PagesRead.jsx';
import Root from './components/Root/Root.jsx';
import BookInfo from './components/BookInfo/BookInfo.jsx';
import ReadBlogs from './components/ReadBlogs/ReadBlogs.jsx';
import WhisList from './components/WhisList/WhisList.jsx';
import DeliveryInfo from './components/Delivery nfo/DeliveryInfo.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([

    {
      path: "/",
     element: <Root></Root>,
     errorElement:<ErrorPage></ErrorPage>,
     children: [
      {
        path: '/',
        // loader: ()=> fetch('data.json'),
        element:<Home></Home>,
      },
      {
        path: '/listedbooks',
        element:<ListedBooks></ListedBooks>,
        children:[
          {
            index:true,
            element:<ReadBlogs></ReadBlogs>,
    
          },
          {
            path:'wishlistbooks',
            element: <WhisList></WhisList>,
          },
        ]
      },
      {
        path: '/pagesread',
        element:<PagesRead></PagesRead>,
      },
      {
        path:'/book/:bookId',
        element:<BookInfo></BookInfo>,
        loader: () => fetch('/data.json')
      },
      {
        path:'/deliveryinfo',
        element: <DeliveryInfo></DeliveryInfo>
      },
      {
        path:'/contactus',
        element:<ContactUs></ContactUs>

      }
     ]
    },
    
      
    
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
       <Toaster></Toaster>
  </React.StrictMode>,
)
