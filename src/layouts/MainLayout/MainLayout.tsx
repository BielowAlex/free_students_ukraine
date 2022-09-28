import React from 'react';
import { Outlet } from 'react-router-dom';
import {Footer, Header, Navigation} from "../../components";

const MainLayout:React.FC = () => {
    return (
        <div className={'wrapper'}>
            <Header/>
            <Navigation/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MainLayout};
