import React, { useEffect, useState } from 'react';

const LimitedService = () => {
    const page = 1;
    const size = 3;

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/services?size=${size}&page=${page}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                setServices(data.data);
                console.log(data.data)
            }else{
                console.log("Could not get the data");
            }
        })
        .catch(error=>console.log(error.message))
    },[])
    return (
        <div>
            <h1>Number of services : {services.length}</h1>
            <div>
                {
                    services.map(service=><p>{service.name}</p>)
                }
            </div>
        </div>
    );
};

export default LimitedService;