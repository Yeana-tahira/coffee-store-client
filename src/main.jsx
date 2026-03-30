import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from './Layouts/MainLayout.jsx';
import Home from './Components/Home.jsx';
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import CoffeeDetails from './Components/CoffeeDetails.jsx';
import Signin from './Components/Signin.jsx';
import SignUp from './Components/SignUp.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import Users from './Components/Users.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: () => fetch('https://coffee-store-server-orpin-six.vercel.app/coffees'),
        Component: Home
      },
      {
        path: 'addcoffee',
        Component: AddCoffee
      },
      {
        path: 'coffee/:id',
        // loader: ({ params }) => fetch(`https://coffee-store-server-orpin-six.vercel.app/coffees/${params.id}`),
        Component: CoffeeDetails
      },
     
      {
        path: 'updatecoffee/:id',
        loader: ({params}) => fetch(`https://coffee-store-server-orpin-six.vercel.app/coffees/${params.id}`),
        Component: UpdateCoffee
      },
      {
        path: 'signin',
        Component: Signin
      },
      {
        path: 'signup',
        Component: SignUp
      },
      {
        path: 'users',
        loader: () => fetch('https://coffee-store-server-orpin-six.vercel.app/users'),
        Component: Users
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
