import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Services/ServiceDetails-Review/ServiceDetails";
import Main from "../Layout/Main";

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
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <ServiceDetails></ServiceDetails>
            },
            {
                path: '/',
                element: <Home></Home>
            },
        ]
    }
])
export default router;