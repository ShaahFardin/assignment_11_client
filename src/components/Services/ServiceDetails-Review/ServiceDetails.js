import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { Card, Label, Sidebar, Textarea } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PrivateRoutes from '../../../Routes/PrivateRoutes';
import Comment from '../../Comment/Comment';
import EventReview from '../../Review/EventReview';
import UserReview from '../../Review/UserReview';

const ServiceDetails = () => {

    const router = useParams();
    const { id } = router;

    const [serviceDetails, setServiceDetails] = useState([]);
    const [evenReviews, setEventReviews] = useState([]);
    const [serviceSpecificReview,setserviceSpecificReview ] = useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/service/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServiceDetails(data.data);
                    // setServiceDetails(data.data)
                }
            })
            .catch(error => console.log(error.message))
    }, [id])

    const { name, image, description, price, likes, ratings, download } = serviceDetails;


    useEffect(() => {
        fetch('http://localhost:5000/eventReview')
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setEventReviews(data.data);
                    
                }else{
                    console.log('couldnot get data')
                }
            })
            .catch(error => console.log(error.message))
    }, [])



    useEffect(()=>{
        fetch(`http://localhost:5000/userReviews?service_id=${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                setserviceSpecificReview(data.data);
                console.log(data);
                setRefresh(false)
            }else{
                console.log('could not get the service specific dadta');
            }
        })
        .catch(error=>console.log(error.message))
    },[refresh, id])



    return (
        <div className='w-3/4 mx-auto'>

            <div className=" my-16">
                <h1 className='text-4xl  my-10 font-thin text-left'>Get a better look at what you get with us</h1>
                <Card >
                    <img className='h-96 rounded-xl' src={image} alt='fdf' />
                    <a href="#dfd">
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </a>
                    <div className="mt-2.5 mb-5 flex items-center justify-between">
                        <div className='flex items-center'>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <svg
                                className="h-5 w-5 text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                {ratings}
                            </span>
                        </div>
                        <div>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                Likes:  {likes}
                            </span>
                            <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
                                Download:  {download}
                            </span>
                        </div>


                    </div>
                    <div>
                        <p className="font-thin text-gray-700 dark:text-gray-400 ">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">
                            ${price}
                        </span>
                        <a
                            href="df"
                            className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            Add to cart
                        </a>
                    </div>
                </Card>
            </div>

            <div className='flex-shrink-0 md:flex justify-center my-36 '>

                <div className='w-3/5'>
                    <h5 className="text-3xl font-thin text-left">
                        See what our customer has to say about us
                    </h5>
                    {/* <p className='font-thin'>Total Review {serviceSpecificReview.length}</p> */}
                    {
                     serviceSpecificReview.map(specificReview=><UserReview key={specificReview._id} specificReview={specificReview}></UserReview>)
                    }
                    {
                        evenReviews.map(eventReview => <EventReview key={eventReview._id} eventReview={eventReview}></EventReview>)
                    }
                </div>

                <div className='w-2/5 mt-12 ml-5'>
                   <Comment name={name}></Comment>
                </div>

            </div>


        </div>
    );
};

export default ServiceDetails;