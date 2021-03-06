import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './banner.module.css';

const Banner = ({ content, onClose }) => (
       <div className={styles.banner}>
           <h1>{content}</h1>
           <div className={styles.close} onClick={onClose}>
               <FontAwesomeIcon icon={faTimes}/>
           </div>
       </div>     
    );

export default Banner;