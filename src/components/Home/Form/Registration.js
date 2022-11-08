import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Registration = () => {

    const {createNewUserManually} = useContext(AuthContext)


    const handleRegistratioin = e => {
        e.preventDefault();

        
        const user = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
        }
        createNewUserManually(user.email, user.password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            alert("User created successfully")
        })
        .catch(error=>console.log(error))
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
        </div>
    );
};

export default Registration;