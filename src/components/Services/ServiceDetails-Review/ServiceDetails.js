import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const router = useParams();
    const {id} = router;

    return (
        <div>
            <h1>This is service details of id:{id} </h1>
        </div>
    );
};

export default ServiceDetails;