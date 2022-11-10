import { Sidebar } from 'flowbite-react';
import React from 'react';
import { FaChartBar, FaUser, FaShoppingBag, FaSignInAlt, FaTable, FaChartArea, FaInbox, FaDollarSign, FaHandsHelping } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="w-fit">
            <Sidebar aria-label="Sidebar with content separator example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={FaChartBar}
                        >
                            Dashboard
                        </Sidebar.Item>

                        <Sidebar.Item
                            href="#"
                            icon={FaInbox}
                        >
                            <Link to='/blogs'>Blogs</Link>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaUser}
                        >
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaShoppingBag}
                        >
                            <Link to='/services'>Services</Link>
                        </Sidebar.Item>
                        <Sidebar.Item

                            icon={FaSignInAlt}
                        >
                            <Link to='/login'> Sign In</Link>
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaTable}
                        >
                            <Link to='/register'> Sign Up</Link>
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                    <Sidebar.ItemGroup>
                        <Sidebar.Item
                            href="#"
                            icon={FaDollarSign}
                        >
                            Upgrade to Pro
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaChartArea}
                        >
                            Documentation
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaHandsHelping}
                        >
                            Help
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default Dashboard;