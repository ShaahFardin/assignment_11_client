import { Avatar, Button, DarkThemeToggle, Dropdown, Flowbite, Navbar } from 'flowbite-react';

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const Header = () => {

    const { user, logout, setLoading, } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.error("User Logged out")
                setLoading(false)
            }).catch()
    }

    return (
        <Navbar
            fluid={true}
            rounded={true}
        >
            <Navbar.Brand href="https://photography-assignment-11.web.app/">
                <img
                    src="https://i.ibb.co/sqHbV1t/lens2.jpg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
                    PHOTOLENS
                </span>
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img={user?.photoURL} rounded={true} />}
                >
                    <Flowbite>
                        <DarkThemeToggle />
                    </Flowbite>
                    <Dropdown.Header>
                        <span className="block text-sm">
                            {user?.displayName}
                        </span>
                        <span className="block truncate text-sm font-medium">
                            {user?.email}
                        </span>
                    </Dropdown.Header>

                    <Dropdown.Item>
                        {user?.email}
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/myReviews'>My Reviews</Link>
                    </Dropdown.Item>

                    <Dropdown.Item>
                        <Link to='/addService'>Add Service</Link>
                        {/* {user?.email? <Link to='/addService'>Add Service</Link> : <></>} */}
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        {user?.email ? <Button onClick={handleLogout}>Signout</Button>
                            : <Button><Link to='/login'>SignIn</Link></Button>}
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse >
                <Navbar.Link
                    href="/home"
                    active={true}
                >
                    <Link to='/home'><span className='text-xl'>Home</span></Link>
                </Navbar.Link>

                <Navbar.Link href="/navbars">
                    <Link to='/services'><span className='text-xl'>Services</span></Link>
                </Navbar.Link>

                <Navbar.Link>
                    <Link to='/blogs'><span className='text-xl'>Blogs</span></Link>
                </Navbar.Link>

                <Navbar.Link >

                </Navbar.Link>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;