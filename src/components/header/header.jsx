import React from 'react';
import styles from './header.module.css';

const Header = ({ onLogout }) => {
    return (
        <div className={styles.header}>
        {onLogout && <button className={styles.logout} onClick={onLogout}>Logout</button>}
            <img className={styles.logo} src="./images/logo.png" alt="logo"/>
            <h1 className={styles.title}>CN Journal <i>Beta</i></h1>
        </div>
    )
};

export default Header;