import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {

    const router = useParams();
    const {id} = router;

    const [ServiceDetails,setServiceDetails ] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/service/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                console.log(data.data);
                setServiceDetails(data.data)
            }
        })
    },[id])

    return (
        <div>
            <h1>This is service details of id:{id} </h1>
        </div>
    );
};

export default ServiceDetails;