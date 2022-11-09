import { Button, Table } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const MyReviewTable = ({ myReview }) => {

    const {  email, review, service_name } = myReview;

    console.log(myReview)

    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {service_name}
            </Table.Cell>
            <Table.Cell>
                {review}
            </Table.Cell>
           
            <Table.Cell>
            <Button>Edit</Button>
            </Table.Cell>
            <Table.Cell>
                <Button>Delete</Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default MyReviewTable;