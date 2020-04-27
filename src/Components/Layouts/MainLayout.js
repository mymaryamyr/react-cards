import React from 'react';
import s from '../../CSS.module/Landing.module.css'

function Layout (props) {
    return (
        <div className={s.landing}>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            {props.children}
        </div>
    )
}


export default Layout;