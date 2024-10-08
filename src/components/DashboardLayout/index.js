// src/components/DashboardLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

const DashboardLayout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State untuk mengelola visibilitas sidebar

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex-1">
                <Header isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;