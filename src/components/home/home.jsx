import React, { useCallback, useEffect, useState } from 'react';
import Header from '../header/header';
import styles from './home.module.css';
import { useHistory } from 'react-router-dom';

const Home = ({ authService }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [userId, setUserId] = useState(historyState && historyState.id);
    

    const onLogout = useCallback(() => {
        authService.logout();
    }, [authService]);

    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/login');
            }
        })
    }, [authService, userId, history])

    return (
        <div className={styles.home}>
            <Header onLogout={onLogout}/>
        </div>
    )
};

export default Home;