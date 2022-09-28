import React from 'react';
import {NavLink} from "react-router-dom";

import './navigation.css'

const Navigation:React.FC = () => {
    return (
        <nav className={'nav'}>
            <NavLink to={'/'} className={'link '}>Головне</NavLink>
            <NavLink to={'/history'} className={'link'}>Історія</NavLink>
            <NavLink to={'/experience'} className={'link'}>Досвід студентів</NavLink>
            <NavLink to={'/media'} className={'link'}>ЗМІ та офіційні заяви</NavLink>
        </nav>
    );
};

export {Navigation};
