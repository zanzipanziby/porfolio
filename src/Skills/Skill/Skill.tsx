import React from 'react';
import s from './skill.module.css'


type SkillPropsType = {
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <div className={s.skillWrapper}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <p className={s.description}>
                {props.description}
            </p>
        </div>
    );
};

