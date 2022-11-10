import { Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Comment = ({name}) => {

    const router = useParams();
    const {id} = router;

   console.log("name of the service", name);

    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmitReview = (e) => {
        e.preventDefault();

        if (!user) {
            toast.warning("Please login to add review",  { position: toast.POSITION.TOP_LEFT })
            return navigate('/login')
        }

        const userReview = {
            "service_id": id,
            "service_name": name,
            "email": user.email,
            "review": e.target.review.value,

        }


        fetch('http://localhost:5000/userReviews', {
            method:"POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(userReview)
        })
        .then(res=> res.json())
        .then(data=>{
            if(data.success){
                toast.success("Review added successfully",  { position: toast.POSITION.TOP_CENTER });
                
            }else{
                console.log(data.error);
            }
        })
        .catch(error=>{
            console.log(error.message);
        })

    }
    return (
        <div>
            <div id="textarea">
                <form onSubmit={handleSubmitReview}>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="comment"
                        />
                    </div>
                    <TextInput placeholder={name} readOnly className='mb-3'></TextInput>
                    <TextInput
                        type='text'
                        name='review'
                       
                        placeholder="Leave a comment..."
                       
                    />
                    <button className='text-start bg-blue-600 px-16 py-1 text-white font-semibold rounded-lg mt-10'>ADD</button>
                </form>
            </div>
        </div>
    );
};

export default Comment;