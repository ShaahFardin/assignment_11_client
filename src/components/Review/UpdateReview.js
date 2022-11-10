import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const UpdateReview = () => {


    const router = useParams();
    const { id } = router

    const { user } = useContext(AuthContext)
    const navigate = useNavigate();


    const handleAddProducts = event => {
        event.preventDefault();
        const updatedReview = {
            review: event.target.review.value
        }


        fetch(`http://localhost:5000/update/${id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Review updated successfully", { position: toast.POSITION.TOP_CENTER })
                    navigate('/myReviews');
                } else {
                    toast.error("Could not update the review", { position: toast.POSITION.TOP_CENTER })
                }
                console.log(data);
            })
            .catch(error => console.log(error.message))
    }



    return (
        <div>
            <h1> Update the review with id :{id} </h1>
            <form onSubmit={handleAddProducts} className="flex flex-col gap-4 w-3/4 mx-auto">
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email1"
                            value="your email"
                        />
                    </div>
                    <TextInput

                        readOnly
                        id="email1"
                        type="email"
                        placeholder={user?.email}
                        required={true}
                    />
                </div>
                <div >
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                            value="Your message"
                        />
                    </div>
                    <TextInput

                        name='review'
                        placeholder="Leave a comment..."
                        required={true}

                    />
                </div>

                <Button type="submit">
                    Update
                </Button>
            </form>
        </div>
    );
};

export default UpdateReview;