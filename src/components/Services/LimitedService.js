import { Button, Rating } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const LimitedService = () => {
    const page = 1;
    const size = 3;

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services?size=${size}&page=${page}`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    setServices(data.data);
                    console.log(data.data)
                } else {
                    console.log("Could not get the data");
                }
            })
            .catch(error => console.log(error.message))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto mt-24 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

            <div className=''>
                <Link to='/services'>
                    <button className='bg-blue-700 px-12 py-2 border my-10 text-white
                 font-semibold rounded-lg'>View All</button></Link>
            </div>
            <div className='my-32 ml-32 mx-auto'>
                <h1 className='text-5xl font-thin my-10 text-left'>What our customer thinks about us?</h1>
                <React.Fragment>
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                        <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                            4.95 out of 5
                        </p>
                    </Rating>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                        1,745 global ratings
                    </p>
                    <Rating.Advanced className='my-3' percentFilled={70}>
                        5 star
                    </Rating.Advanced>
                    <Rating.Advanced className='my-3' percentFilled={17}>
                        4 star
                    </Rating.Advanced>
                    <Rating.Advanced className='my-3' percentFilled={8}>
                        3 star
                    </Rating.Advanced>
                    <Rating.Advanced className='my-3' percentFilled={4}>
                        2 star
                    </Rating.Advanced>
                    <Rating.Advanced className='my-3' percentFilled={1}>
                        1 star
                    </Rating.Advanced>
                </React.Fragment>
                <Link to='/services'><Button color='gray'>Take a look at our various collectioin</Button></Link>
            </div>

        </div>
    );
};

export default LimitedService;