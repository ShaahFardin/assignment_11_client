import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const MyReviewTable = ({ myReview, setRefresh, refresh }) => {

    const { email, review, service_name, _id } = myReview;


    const handelDelete = () => {
        fetch(`http://localhost:5000/myReviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("successfully deleted");
                    setRefresh(!refresh)
                } else {
                    alert(data.error)
                }
            })
            .catch(error => alert(error.message))

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
                <Button>Edit</Button>
            </Table.Cell>
            <Table.Cell>
                <Button onClick={handelDelete}>Delete</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewTable;