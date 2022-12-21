import React from 'react';
import s from './Header.module.css'
import sContainer from '../common/styles/container.module.css'
import {Nav} from "./Nav/Nav";



export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.headerContainer}>
                <Nav/>
            </div>
        </div>
    );
};

