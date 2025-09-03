import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Layout : React.FC = () =>{
    return(
        <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="p-10 m-10 bg-amber-100">
            <Outlet />
        </main>
        <Footer />
        </div>
    )
};

export default Layout;