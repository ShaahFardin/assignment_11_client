import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/services`)
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
            <h1>Services : {services.length}</h1>
            <div>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;