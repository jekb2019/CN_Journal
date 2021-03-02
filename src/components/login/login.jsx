import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
    const onLogin = event => {
        event.preventDefault();
    }

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