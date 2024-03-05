import { createBrowserRouter,RouterProvider } from "react-router-dom";



// all the pages and component to render
import LandingPage from "./Pages/LandingPage";
import Nav from "./Component/Navbar/Nav";
import { Home } from "./Pages/Home";
import {MyOrder} from "./Pages/MyOrder";
import {Cart} from "./Pages/Cart";
import {SignIn} from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { Error } from "./Pages/Error";

function App() {

  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Nav />,
      errorElement: <Error />,
      children:[
        { index : true, element: <LandingPage />},
        { path:"/home", element: <Home />},
        { path:"/myorder", element: <MyOrder />},
        { path:"/cart", element: <Cart />},
        { path:"/signin", element: <SignIn />},
        { path:"/signup", element: <SignUp />},
      ]
    }
  ]);

  return (
    <>
      {/* routes */}
        <RouterProvider router={router} />
    </>
  );
}

export default App;
