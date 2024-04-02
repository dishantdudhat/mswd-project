import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Signin from './Signin.jsx';
import Signup from './Signup.jsx';
import Orderpage from './Orderpage.jsx';
import Ocomfirm from './Ocomfirm.jsx';
// import './index.css'

const router = createBrowserRouter([
  {
    path:"/",
    element : <App/>
  },
  {
    path:"sign-in",
    element: <Signin/>,
  },
  {
    path:"sign-up",
    element: <Signup/>
  },
  {
    path :"order",
    element:<Orderpage/>
  },
  {
    path:"confirm/:id",
    element:<Ocomfirm/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>,
)
