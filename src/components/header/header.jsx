import React from 'react';
import styles from './header.module.css';

const Header = (props) => (
    <div className={styles.header}>
        <img className={styles.logo} src="./images/logo.png" alt="logo"/>
        <h1 className={styles.title}>CN Journal <i>Beta</i></h1>
    </div>
);

export default Header;