import { Button, Checkbox, FileInput, Label, Textarea, TextInput } from 'flowbite-react';
import React from 'react';

const AddService = () => {

    const handleAddService = (e) => {
        e.preventDefault();
        const service = {
            name: e.target.name.value,
            price: e.target.price.value,
            image: e.target.image.value,
            description: e.target.description.value

        }
        fetch('http://localhost:5000/add-service', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert("Service added successfully")
                } else {
                    alert('Could not add the service to the database')
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