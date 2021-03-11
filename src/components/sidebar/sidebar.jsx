import React from 'react';
import styles from './sidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCalendarCheck, faHome, faNotesMedical, faTasks, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = ({ url }) => {
    return (
    <nav className={styles.sidebar}>
        <ul className={styles.list}>
            <li className={styles.item}>
                <Link to={`${url}`} className={styles.button}>
                    <FontAwesomeIcon icon={faHome}/>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`${url}/clients`} className={styles.button}>
                    <FontAwesomeIcon icon={faUsers}/>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`${url}/calendar`} className={styles.button}>
                    <FontAwesomeIcon icon={faCalendarAlt}/>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`${url}/clinicalnote`} className={styles.button}>
                    <FontAwesomeIcon icon={faNotesMedical}/>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`${url}/tasks`} className={styles.button}>
                    <FontAwesomeIcon icon={faTasks}/>
                </Link>
            </li>
            <li className={styles.item}>
                <Link to={`${url}/appointments`} className={styles.button}>
                    <FontAwesomeIcon icon={faCalendarCheck}/>
                </Link>
            </li>
        </ul>
    </nav> 
    )
};

export default Sidebar;