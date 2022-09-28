import React from 'react';
import {ReactSVG} from "react-svg";

import './header.css'

const Header:React.FC = () => {

    return (
        <header className="header">
            {/*<div className="header_back">*/}
            {/*    <img src="/images/header/back.jpg" alt="students"/>*/}
            {/*</div>*/}
            <div className="header_top">
                <div className="glory_ukraine">
                    <ReactSVG src='/images/header/ua_flag.svg'/>
                    <div className="glory_ukraine_text">
                        <span className="text">Слава Україні</span>
                        <span className="text">Героям Слава</span>
                    </div>
                </div>
                <div className="lang_selector">
                    <span className="lang ua">UA</span>
                    <span className="lang eng">ENG</span>
                </div>
            </div>
            <div className="header_content">
                <div className="appeal">
                    <h2>
                        Ми - українські студенти іноземних ВНЗ.
                        Ми просимо вашої допомоги, щоб влада нас почула
                    </h2>
                    <a
                        href="https://petition.president.gov.ua/petition/158664"
                        target='_blank'
                        rel="noreferrer" >
                        <span>Підписати петицію</span>
                        <ReactSVG src='/images/header/arr_right.svg'/>
                    </a>
                </div>
             </div>
        </header>
    );
};

export {Header};
