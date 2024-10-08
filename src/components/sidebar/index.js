// src/components/Sidebar.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import LogoSMK from '../../assest/smk-removebg.png';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Sidebar = ({ isOpen }) => {
    const router = useRouter();

    // Fungsi untuk menentukan apakah rute saat ini aktif
    const isActive = (path) => router.pathname === path;

    return (
        <div className={`transition-all duration-300 ease-in-out h-auto bg-white text-black ${isOpen ? 'w-64' : 'w-20'}`}>
            <div className="flex items-center justify-center p-4">
                <Image src={LogoSMK} width={50} height={50} alt="Logo" />
                <span className={`ml-2 font-bold ${isOpen ? 'block' : 'hidden'}`}>SMKN 1 BANJAR</span>
            </div>
            <ul className="mt-4">
                <li className={`flex items-center px-4 py-3  hover:bg-gray-500 hover:text-white cursor-pointer m-4 rounded-xl ${isActive('/admin/dashboard') ? 'bg-gray-600 text-white' : ''}`}>
                    <Link href="/admin/dashboard">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faHome} className="mr-0 lg:mr-2" />
                            {isOpen && <span>Dashboard</span>}
                        </div>
                    </Link>
                </li>
                <li className={`flex items-center px-4 py-3  hover:bg-gray-500 hover:text-white cursor-pointer m-4 rounded-xl ${isActive('/admin/data') ? 'bg-gray-600 text-white' : ''}`}>
                    <Link href="/admin/data">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faUser} className="mr-0 lg:mr-2" />
                            {isOpen && <span>Data</span>}
                        </div>
                    </Link>
                </li>
                <li className={`flex items-center px-4 py-3  hover:bg-gray-500 hover:text-white cursor-pointer m-4 rounded-xl ${isActive('/admin/settings') ? 'bg-gray-600 text-white' : ''}`}>
                    <Link href="/admin/settings">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faCog} className="mr-0 lg:mr-2" />
                            {isOpen && <span>Settings</span>}
                        </div>
                    </Link>
                </li>
                <li className={`flex items-center px-4 py-3  hover:bg-gray-500 hover:text-white cursor-pointer m-4 rounded-xl ${isActive('/admin/logout') ? 'bg-gray-600 text-white' : ''}`}>
                    <Link href="/admin/logout">
                        <div className="flex items-center">
                            <FontAwesomeIcon icon={faSignOutAlt} className="mr-0 lg:mr-2" />
                            {isOpen && <span>Logout</span>}
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
