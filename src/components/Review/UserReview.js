import { Card } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { } from "react-icons/fa";
const UserReview = ({ specificReview }) => {

    const { user } = useContext(AuthContext)
    const { review, email } = specificReview;

    return (
        <div>
            <div className=" my-5">
                <Card>
                    <div className="flow-root">
                        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                            <li className="pt-3 pb-0 sm:pt-4">
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center ">
                                        <img
                                            className="h-10 w-10 rounded mr-3"
                                            src={user?.photoURL}
                                            alt=""
                                        />

                                        <div className="min-w-0 flex-1">
                                            <p className="font-thin text-gray-600 dark:text-white">
                                                {email}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">

                                        <p className="truncate text-xl text-gray-500 dark:text-gray-400">
                                            {review}
                                        </p>
                                    </div>
                                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                                        <p className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">Ratings : { } </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default UserReview;