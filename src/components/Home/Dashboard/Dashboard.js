import { Sidebar } from 'flowbite-react';
import React from 'react';
import { FaChartBar, FaViber, FaUser, FaShoppingBag, FaSignInAlt, FaTable, FaChartArea, FaInbox, FaDollarSign, FaHandsHelping } from "react-icons/fa";

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
                            icon={FaViber}
                        >
                            Kanban
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaInbox}
                        >
                            Inbox
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
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaSignInAlt}
                        >
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item
                            href="#"
                            icon={FaTable}
                        >
                            Sign Up
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