import React from 'react';
import {ReactSVG} from 'react-svg';

import './footer.css';

const Footer: React.FC = () => {
    return (
        <footer className={'footer'}>
            <h1 className="logo">
                # Free Students <span>Ukraine</span>
            </h1>
            <div className="copyright">
                <p>Сайт розроблено українськими студентами іноземних ВНЗ</p>
                <div className="glory_ukraine">
                    <ReactSVG src={'/images/header/ua_flag.svg'}/>
                    <div className="glory_ukraine_text">
                        <span className="text">Україна переможе!</span>
                    </div>
                </div>
            </div>
            <div className="social_media">
                <a
                    href={'https://www.facebook.com/groups/767371377890309'}
                    target={'_blank'}
                    rel='noreferrer'
                    className="media">
                    <ReactSVG src='/images/footer/facebook.svg'/>
                </a>
                <a
                    href={'https://instagram.com/ua_students_abroad '}
                    target={'_blank'}
                    rel='noreferrer'
                    className="media">
                    <ReactSVG src='/images/footer/inst.svg'/>
                </a>
                <a
                    href={'https://t.me/studentabroad2022'}
                    target={'_blank'}
                    rel='noreferrer'
                    className="media">
                    <ReactSVG src='/images/footer/telegram.svg'/>
                </a>
                <a
                    href={'https://twitter.com/hashtag/freeStudentsUkraine'}
                    target={'_blank'}
                    rel='noreferrer'
                    className="media">
                    <ReactSVG src='/images/footer/twitter.svg'/>
                </a>
            </div>
        </footer>
    );
};

export {Footer};
