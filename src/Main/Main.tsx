import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/styles/container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <div className={s.textWrapper}>
                    <span>Hi there</span>
                    <h1>I am Dmitry</h1>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                    </p>
                </div>
                <div className={s.photoWrapper}></div>
            </div>

        </div>
    );
};

