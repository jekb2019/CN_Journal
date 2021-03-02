import React from 'react';
import styles from './footer.module.css';

const Footer = (props) => (
    <footer className={styles.footer}>
        <p className={styles.note}>&#169; 2021 CN Journal. All Rights Reserved</p>
    </footer>
);

export default Footer;