import { Button, Table } from 'flowbite-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const MyReviewTable = ({ myReview, setRefresh, refresh }) => {

    const { email, review, service_name, _id } = myReview;
    const navigate = useNavigate();


    // Delete review
    const handelDelete = () => {
        fetch(`https://assignment-11-server-three-jet.vercel.app/myReviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.info("successfully deleted",  { position: toast.POSITION.TOP_CENTER });
                    setRefresh(!refresh)
                } else {
                    toast.error("Could not delete the review",  { position: toast.POSITION.TOP_CENTER } )
                }
            })
            .catch(error => console.log(error.message))

    }

    const handleUpdate=()=>{
        navigate(`/review/update/${_id}`)
    }

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {service_name}
            </Table.Cell>
            <Table.Cell>
                {review}
            </Table.Cell>
            <Table.Cell>
                {email}
            </Table.Cell>

            <Table.Cell>
                <Button onClick={handleUpdate}>Edit</Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handelDelete}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewTable;