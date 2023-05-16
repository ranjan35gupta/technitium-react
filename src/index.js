import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Components/Pages/Home'
import Login from './Components/Pages/Login'
import About_us from './Components/Pages/About_us'
import Register from './Components/Pages/Register'

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
const router = createBrowserRouter([
  {path:'/',
element:<App/>},
{
  path:'/Home',
  element:<Home/>
},
{path:'/Login',
element:<Login/>
},
{path:'/About',
element:<About_us/>},
{
  path:'/Register',
  element:<Register/>
}


])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
