import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from '../banner/banner';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ authService }) => {
    
    const history = useHistory();
    const bannerRef = useRef();

    const onBannerClose = () => {
        bannerRef.current.style.transform = 'translateY(-100%)'
    }

    const goToHome = userId => {
        history.push({
            pathname: '/home',
            state: {id: userId}
        });
    };

    const onLogin = (event) => {
        const authMethod = event.target.dataset.authmethod;
        console.log(authMethod);
        switch(authMethod) {
            case 'email':
                authService
                .loginWithEmail();
                return;
            case 'google':
                authService
                .loginWithProvider(authMethod)
                .then(data => goToHome(data.user.uid));
                return;
            default:
                throw new Error('Unkown authentication method');
        }
    }

    // If user already signed in, go to home page
    useEffect(() => {
            authService.onAuthChange(user => {
            user && goToHome(user.id);
        });
    })

    return (
        <section className={styles.container}>
            <div ref={bannerRef} className={styles.banner}>
                <Banner 
                    onClose={onBannerClose}
                    content='Current version: Beta 1.0.0'/>
            </div>
            <Header/>
            <section className={styles.login}>
                <div className={styles.description}>
                    <h1 className={styles.greeting}>Welcome</h1>
                    <p>Log in to continue</p>
                </div>
                <ul className={styles.options}>
                    <li className={styles.item}>
                        <button data-authmethod='google' onClick={onLogin} className={styles.button}>Google</button>
                    </li>
                    <li className={styles.item}>
                        <button data-authmethod='email' onClick={onLogin} className={styles.button}>Other Email</button>
                    </li>
                </ul>
            </section>
            <Footer/>
        </section>
    )
};

export default Login;