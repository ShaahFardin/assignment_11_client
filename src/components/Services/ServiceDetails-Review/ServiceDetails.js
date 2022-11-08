import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const router = useParams();
    const {id} = router;

    const [serviceDetails,setServiceDetails ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
               setServiceDetails(data.data);
                setServiceDetails(data.data)
            }
        })
    },[id])

    return (
        <div>
            <h1>This is service details of id:{id} </h1>
            <h1>name : {serviceDetails.name} </h1>

        </div>
    );
};

export default ServiceDetails;