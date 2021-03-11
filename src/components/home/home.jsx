import React, { useCallback, useEffect, useState } from 'react';
import Header from '../header/header';
import styles from './home.module.css';
import { Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import Sidebar from '../sidebar/sidebar';
import HomePage from '../main-pages/home_page/home_page';
import ClientPage from '../main-pages/client_page/client_page';
import CalendarPage from '../main-pages/calendar_page/calendar_page';
import ClinicalNotePage from '../main-pages/clinical_note_page/clinical_note_page';
import TaskPage from '../main-pages/tasks_page/task_page';
import AppointmentPage from '../main-pages/appointment_page/appointment_page';

const Home = ({ authService }) => {
    const history = useHistory();
    const historyState = history?.location?.state;
    const [userId, setUserId] = useState(historyState && historyState.id);
    const {path, url} = useRouteMatch();
    const location = useLocation();
    const {currentPage, setCurrentPage} = useState(location.pathname);

    const onLogout = useCallback(() => { 
        authService.logout();
    }, [authService]);

    // Auth
    useEffect(() => {
        authService.onAuthChange(user => {
            if (user) {
                setUserId(user.uid);
            } else {
                history.push('/login');
            }
        })
    }, [authService, userId, history])

    // Sidebar color
    // useEffect(() => {
    //     switch(currentPage) {
    //         case "/home":
    //         case "/home/clients":
    //         case "/home/calendar":
    //         case "/home/clinicalnote":
    //         case "/home/tasks":    
    //         case "/home/appointments":
    //         default:
    //             throw new Error('Unkown Page');
    //     }
    // }, [currentPage])

    return (
        <div className={styles.home}>
            <Header onLogout={onLogout}/>
            <div className={styles.wrapper}>
                <div className={styles.sidebar}>
                    <Sidebar url={url} path={path}/>
                </div>
                <div className={styles.page}>
                    <Switch>
                        <Route path='/home' exact>
                            <HomePage/>
                        </Route>
                        <Route path='/home/clients' exact>
                            <ClientPage/>
                        </Route>
                        <Route path='/home/calendar' exact>
                            <CalendarPage/>
                        </Route>
                        <Route path='/home/clinicalnote' exact>
                            <ClinicalNotePage/>
                        </Route>
                        <Route path='/home/tasks' exact>
                            <TaskPage/>
                        </Route>
                        <Route path='/home/appointments' exact>
                            <AppointmentPage/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
};

export default Home;