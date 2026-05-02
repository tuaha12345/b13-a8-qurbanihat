import React from 'react';
import Navbar from '../component/shared/Navbar';

const MainLayout = ({ children }) => {
    return (
        <>
        <Navbar />
        
        {children}
        </>
    );
};

export default MainLayout;
