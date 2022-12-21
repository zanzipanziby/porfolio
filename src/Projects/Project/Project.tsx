import React from 'react';
import s from './project.module.css'

type ProjectPropsType = {
    projectImg: string
    title: string
    description: string
}


const Project = (props: ProjectPropsType) => {
    return (
        <div className={s.projectWrapper}>
            <div className={s.projectPreviewContainer} style={{backgroundImage: `url(${props.projectImg})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <a href="#" className={s.link}>View</a>
            </div>
            <div className={s.textContainer}>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Project;