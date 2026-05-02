import React from 'react';
import Navbar from '../component/shared/Navbar';
import Footer from '../component/shared/Footer';



const MainLayout = ({ children }) => {
    return (
        <>
        <Navbar />
        
        {children}
        <Footer></Footer>
        </>
    );
};

export default MainLayout;
