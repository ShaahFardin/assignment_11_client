import { createBrowserRouter } from "react-router-dom";
import BlogSection from "../components/BlogsSection/BlogSection";
import Comment from "../components/Comment/Comment";
import Login from "../components/Home/Form/Login";
import Registration from "../components/Home/Form/Registration";
import Home from "../components/Home/Home/Home";
import MyReview from "../components/Review/MyReview";
import UpdateReview from "../components/Review/UpdateReview";
import UserReview from "../components/Review/UserReview";
import AddService from "../components/Services/AddService";
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
                element: <PrivateRoutes><MyReview></MyReview></PrivateRoutes>
            },
            {
                path:'/review/update/:id',
                element: <UpdateReview></UpdateReview>
            },
            {
                path:'/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path:'/blogs',
                element: <BlogSection></BlogSection>
            },
           
        ]
    }
])
export default router;