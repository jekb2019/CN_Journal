import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({authService}) => {
    
    const history = useHistory();
    const goToHome = userId => {
        history.push({
            pathname: '/home',
            state: {id: userId}
        });
    };

    const onLogin = event => {
        authService
        .login(event.currentTarget.textContent)
        .then(data => goToHome(data.user.uid));
    }

    // If user already signed in, go to home page
    useEffect(() => {
            authService.onAuthChange(user => {
            user && goToHome(user.id);
        });
    })

    return (
        <section className={styles.container}>
            <Header/>
            <section className={styles.login}>
                <div className={styles.description}>
                    <h1 className={styles.greeting}>Welcome</h1>
                    <p>Log in to continue</p>
                </div>
                <ul className={styles.options}>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button onClick={onLogin} className={styles.button}>Other Email</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    )
};

export default Login;