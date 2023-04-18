import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Main from './components/Layout/Main';
import ShowDetails from './components/ShowDetails/ShowDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Blog from './components/Blog/Blog';
import fetchData from './localDb/data';

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
          path: 'ShowDetails/:id',
          element: <ShowDetails></ShowDetails>,
          loader: () => fetch('/jobListings.json')
        },
        {
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: '/appliedJob',
          element: <AppliedJobs></AppliedJobs>,
          loader: fetchData
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <ErrorPage></ErrorPage>
        }
    ]
  }
]);









ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
