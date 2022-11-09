import { Table } from 'flowbite-react';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import MyReviewTable from './MyReviewTable';

const MyReview = () => {

    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [myReviews, setMyReviews] = useState([]);
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/myReviews?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyReviews(data.data)
            })
    }, [email, refresh])

    if(myReviews.length === 0){
        return <h1 className='text-5xl font-thin my-20'>You did not leave any review "_"</h1>
    }

    return (
        <div className='w-3/4 mx-auto my-10'>
            
            <Table striped={true}>
                <Table.Head>
                    <Table.HeadCell>
                        Service name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Color
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">
                            Edit
                        </span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                   {
                    myReviews.map(myReview=> <MyReviewTable key={myReview._id}
                        refresh={refresh} setRefresh={setRefresh} myReview={myReview}></MyReviewTable>)
                   }
                   
                </Table.Body>
            </Table>
        </div>
    );
};

export default MyReview;