import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {MainLayout} from "./layouts";

import './styles/style.css';
import {History} from "./pages";

const App: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<History/>}/>
            </Route>
        </Routes>
    );
}

export {App};
