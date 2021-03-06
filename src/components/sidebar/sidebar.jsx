import React from 'react';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faCalendarCheck, faHome, faNotesMedical, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';

const Sidebar = (props) => (
    <nav className={styles.sidebar}>
        <ul className={styles.list}>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faHome}/></a></li>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faUsers}/></a></li>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faCalendar}/></a></li>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faNotesMedical}/></a></li>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faTasks}/></a></li>
            <li className={styles.item}><a className={styles.button} href=""><FontAwesomeIcon icon={faCalendarCheck}/></a></li>
        </ul>
    </nav> 
    );

export default Sidebar;