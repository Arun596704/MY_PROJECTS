import './App.css'
import Page1 from './PageCompo/Page1'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Page2 from './PageCompo/Page2';
import Page3 from './PageCompo/Page3';


const router = createBrowserRouter(
  [

    {
      path: "/",
      element: <Page1/>
    },

    {
      path: "/page2",
      element: <Page2/>
    },
{
      path: "/page3",
      element: <Page3/>
    },
  ]
);


function App() {

  return (
    <div>
      <RouterProvider router = {router} />
    </div>
  )
}

export default App

    