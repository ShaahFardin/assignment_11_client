import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import {FaGoogle} from "react-icons/fa";

const Login = () => {

    const { login,  googleSignIn, setLoading } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true });

            })
            .catch((error) => {
                console.error(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }

    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const user = result.user;
            console.log(user);
            setLoading(false)
        })
        .catch(error=>console.log(error.message))
    }

    return (
        <div className='w-3/5 mx-auto my-16'>
            <h1 className='text-3xl font-thin text-left mb-10 text-blue-600'>Login</h1>
            <form onSubmit={handleLogin} className="flex flex-col gap-4">

                <div>
                    <div className="mb-2 block">
                        <Label
                            htmlFor="email2"
                            value="Your email"
                        />
                    </div>
                    <TextInput
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
                    LOGIN
                </Button>
            </form>
                <Button onClick={handleGoogleSignIn} className='w-full mt-5' color="gray">
                    <FaGoogle className='text-xl mr-5'></FaGoogle> <p className='font-thin text-xl'>Login with Google</p>
                </Button>
        </div>
    );
};

export default Login;