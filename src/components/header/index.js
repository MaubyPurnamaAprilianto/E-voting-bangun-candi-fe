// src/components/Header.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Header = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="h-16 bg-white text-black flex items-center justify-between px-4 ">
            <button 
                className="bg-gray-600 hover:bg-gray-500 text-white p-2 rounded flex items-center"
                onClick={toggleSidebar}
            >
                <FontAwesomeIcon icon={isSidebarOpen ? faArrowLeft : faArrowRight} />
            </button>
            <div>
                {/* Anda bisa menambahkan elemen lain di sebelah kanan header jika diperlukan */}
            </div>
        </div>
    );
};

export default Header;