import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact/Contact";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>
      ,
      children:[
        {
          path:"/",
          element:<Home></Home>

        },
        {
          path:"/about",
          element:<About></About>

        },
        {
          path:"/project",
          element:<Project></Project>

        },
        {
          path:"/contact",
          element:<Contact></Contact>

        },
        
      ]
    },
  ]);

  export default router