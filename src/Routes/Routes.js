import { createBrowserRouter } from "react-router-dom";
import Comment from "../components/Comment/Comment";
import Login from "../components/Home/Form/Login";
import Registration from "../components/Home/Form/Registration";
import Home from "../components/Home/Home/Home";
import MyReview from "../components/Review/MyReview";
import UpdateReview from "../components/Review/UpdateReview";
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
                element: <Services></Services>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/comment',
                element: <Comment></Comment>
            },
            {
                path:'/myReviews',
                element: <MyReview></MyReview>
            },
            {
                path:'/review/update/:id',
                element: <UpdateReview></UpdateReview>
            }
        ]
    }
])
export default router;