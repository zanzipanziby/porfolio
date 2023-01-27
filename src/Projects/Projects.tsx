import React from 'react';
import s from './projects.module.css'
import sContainer from '../common/styles/container.module.css'
import Project from "./Project/Project";
import todoImg from '../Img/propjects/to-do-list-apps.png'
import socNet from '../Img/propjects/social-network-app.png'

export const Projects = () => {
    return (
        <div className={s.projectsWrapper}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <h2 className={sContainer.title}>My Projects</h2>
                <div>

                </div>
                <div className={s.projects}>
                    <Project
                        projectImg={todoImg}
                        title={'Todolist'}
                        description={"Lorem ipsum " +
                            "dolor sit amet, consectetur " +
                            "adipisicing elit. Cum, nam."}
                    />
                    <Project
                        projectImg={socNet}
                        title={'Social Network'}
                        description={"Lorem ipsum dolor " +
                            "sit amet, consectetur " +
                            "adipisicing elit. Ea, nemo!"}
                    />
                </div>
            </div>
        </div>
    );
};

