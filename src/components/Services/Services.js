import { Spinner } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/UseTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);
    useTitle('Services')

    useEffect(() => {
        fetch(`https://assignment-11-server-three-jet.vercel.app/services`)
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    <Spinner className='h-20 w-20' aria-label="Default status example" />
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
          
            <div className='grid md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto mt-24 gap-5'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;