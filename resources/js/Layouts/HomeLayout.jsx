import React from 'react';
import Footer from '@/Components/organisems/Footer';
import Navbar from '@/Components/organisems/Navbar';

export default function HomeLayout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    );
}
