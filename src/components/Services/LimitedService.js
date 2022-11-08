import { Button } from 'flowbite-react';
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

            <div className='border border-red-600'>
                <Link to='/services'>
                <button className='bg-blue-700 px-12 py-2 border my-10 text-white
                 font-semibold rounded-lg'>View All</button></Link>
            </div>

        </div>
    );
};

export default LimitedService;