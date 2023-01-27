import React from 'react';
import s from './Footer.module.css'
import sContainer from '../common/styles/container.module.css'

export const Footer = () => {
    return (
        <div className={s.footerWrapper}>
            <div className={`${sContainer.container} ${s.container}`}>
                <h2 className={sContainer.title}>Dmitry</h2>
                <div className={s.magicContainer}>
                    <div className={s.whatIsThis}></div>
                    <div className={s.whatIsThis}></div>
                    <div className={s.whatIsThis}></div>
                    <div className={s.whatIsThis}></div>
                </div>
                <div className={s.copyright}>
                    ©2023 Все права защищены
                </div>
            </div>
        </div>
    );
};

