import React from 'react';

import './history-page.css';
import {ReactSVG} from "react-svg";

const History: React.FC = () => {
    return (
        <div className={'history section'}>
            <div className="about">
                <h3>Що відбувається?</h3>
                <p>
                    Студенти іноземних ВНЗ, хлопці від 18 років,
                    їх рідні батьки та дівчата - всі небайдужі прийшли на прикордонний пункт “Шегині”,
                    щоб студенти змогли вчасно прибути на навчання закордон до 1 жовтня.
                    Однак прикордонники видали відмови на перетин, незважаючи на наявність всіх необхідних
                    документів.
                </p>
            </div>

            <div className="photo">
                <img src="/images/history/we_shegynia.jpg" alt="students"/>
                <h3>КПП “Шегині”, 20 вересня 2022</h3>
                <ReactSVG src='/images/other/logo_fsu.svg' className={''}/>
            </div>
        </div>
    );
};

export {History};
