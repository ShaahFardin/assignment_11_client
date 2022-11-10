import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { FaGoogle } from "react-icons/fa";
import { toast } from 'react-toastify';
import useTitle from '../../../hooks/UseTitle';


const Registration = () => {

    const { createNewUserManually, googleSignIn, setLoading } = useContext(AuthContext)
    useTitle("SignUp")

    const handleRegistratioin = e => {
        e.preventDefault();


        const user = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
        }
        createNewUserManually(user.email, user.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User created successfully",  { position: toast.POSITION.TOP_CENTER })
            })
            .catch(error => console.log(error))
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoading(false)
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className='w-3/5 mx-auto mt-20'>
            <form onSubmit={handleRegistratioin} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label value="Your Name" />
                    </div>
                    <TextInput
                        type="text"
                        name='name'
                        placeholder="Full Name"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
                        id="email2"
                        type="email"
                        name='email'
                        placeholder="your@name.com"
                        required={true}
                        shadow={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="password2"
                            value="Your password"
                        />
                    </div>
                    <TextInput
                        id="password2"
                        type="password"
                        name='password'
                        required={true}
                        shadow={true}
                    />
                </div>

                <div className="flex items-center gap-2">
                    <Checkbox id="agree" />
                    <Label htmlFor="agree">
                        I agree with the{' '}
                        <a
                            href="/forms"
                            className="text-blue-600 hover:underline dark:text-blue-500"
                        >
                            terms and conditions
                        </a>
                    </Label>
                </div>
                <Button type="submit">
                    Register new account
                </Button>

            </form>
            <Button icon={FaGoogle} color='light' className='w-full mt-5' onClick={handleGoogleSignIn} type="submit">
              <FaGoogle></FaGoogle> <p className='font-thin ml-5 text-xl'>Google Sign In</p>
            </Button>
        </div>
    );
};

export default Registration;