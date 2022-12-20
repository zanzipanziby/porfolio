import React from 'react';
import s from './skills.module.css'
import sContainer from '../common/styles/container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsWrapper}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill
                        title={"Html/Css"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, animi."}
                    />
                    <Skill
                        title={"JS/TS"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quo."}
                    />
                    <Skill
                        title={"React/Redux"}
                        description={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, iste!"}
                    />
                </div>
            </div>
        </div>
    );
};

