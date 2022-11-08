import { Avatar, Dropdown, Navbar } from 'flowbite-react';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const {user} = useContext(AuthContext);

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://flowbite.com/">
                <img
                    src="https://flowbite.com/docs/images/logo.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    Flowbite
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={ <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                   
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                           {user?.email}
                        </span>
                    </Dropdown.Header>
                    <Dropdown.Item>
                        Dashbord
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Settings
                    </Dropdown.Item>
                    <Dropdown.Item>
                        Earnings
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        {user?.email? <p>Signout</p>:<p>Signin</p>}
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link
                    href="/home"
                    active={true}
                >
                   <Link to='/home'>Home</Link>
                </Navbar.Link>
               
                <Navbar.Link href="/navbars">
                    <Link to='/services'>Services</Link>
                </Navbar.Link>
                
                <Navbar.Link href="/navbars">
                    <Link to='/login'>Login</Link>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    <Link to='/register'>Register</Link>
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    {user?.email? <><Link to='/services'>My Reviews</Link></>:<></>}
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                {user?.email? <><Link to='/services'>Add Review</Link></>:<></>}
                </Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;