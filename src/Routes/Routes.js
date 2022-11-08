import { createBrowserRouter } from "react-router-dom";
import Registration from "../components/Home/Form/Registration";
import Home from "../components/Home/Home/Home";
import ServiceDetails from "../components/Services/ServiceDetails-Review/ServiceDetails";
import Services from "../components/Services/Services";
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
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
        ]
    }
])
export default router;