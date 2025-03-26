import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Profile from "./pages/Profile";
import Home from "./pages/Home";

import './App.css'




function App() {
  const router=createBrowserRouter([
    {
      path: '/profile',
      element:<Profile /> 
    },
    {
      path: '/',
      element:<Home />
    }
  ])





  return (
    <>
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
