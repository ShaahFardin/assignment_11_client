import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Home/Form/Login";
import Registration from "../components/Home/Form/Registration";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Services/ServiceDetails-Review/ServiceDetails";
import Services from "../components/Services/Services";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

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
                path: '/services',
                element: <PrivateRoutes><Services></Services></PrivateRoutes>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])
export default router;