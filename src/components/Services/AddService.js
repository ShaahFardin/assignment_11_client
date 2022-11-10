import { Button, Textarea, TextInput } from 'flowbite-react';
import React from 'react';
import { toast } from 'react-toastify';

const AddService = () => {

    const handleAddService = (e) => {


        e.preventDefault();
        const service = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            description: e.target.description.value
        }


        fetch('https://assignment-11-server-three-jet.vercel.app/add-service', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success("Service added", { position: toast.POSITION.TOP_CENTER })
                } else {
                    toast.error('Could not add the service to the database', { position: toast.POSITION.TOP_CENTER })
                }
            })
            .catch(error => console.log(error.message))
    }


    return (
        <div>
            <form onSubmit={handleAddService} className="flex flex-col gap-4 w-3/6 mx-auto my-10">
                <h1 className='text-2xl font-thin'>Add service</h1>
                <div>

                    <TextInput
                        name='name'
                        className='mb-2'
                        type="text"
                        placeholder="Service Name"
                        required={true}
                    />
                </div>
                <div>
                    <TextInput
                        name='price'
                        className='mb-2'
                        placeholder='$'
                        required={true}
                    />
                </div>
                <div id="fileUpload">
                    <TextInput
                        type="text"
                        name='image'
                        required
                        id="file"
                        helperText="You must upload a photo of the service you want to add ***"
                    />
                </div>
                <div id="textarea">

                    <Textarea
                        name='description'
                        placeholder="Leave a comment..."
                        required={true}

                    />
                </div>

                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default AddService;