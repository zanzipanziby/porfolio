import React from 'react';
import s from './contacts.module.css'
import sContainer from '../common/styles/container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsWrapper}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <h2 className={sContainer.title}>Contacts</h2>
                <div className={s.content}>
                    <form className={s.form}>
                        <div className={s.inputContainer}><input type="text"/></div>
                        <div className={s.inputContainer}><input type="text"/></div>
                        <div className={s.textareaContainer}><textarea/></div>


                    </form>
                    <div className={s.buttonContainer}>
                        <button className={s.button}>send</button>
                    </div>
                </div>

            </div>

        </div>
    );
};

