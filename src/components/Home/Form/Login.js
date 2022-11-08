import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import React from 'react';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password);

        
        
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
                    Register new account
                </Button>
            </form>
        </div>
    );
};

export default Login;