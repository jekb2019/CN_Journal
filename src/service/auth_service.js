import { firebaseAuth, googleProvider } from './firebase'

class AuthService {
    loginWithEmail() {
        // TO DO - implement login option for user defined email and password
    }

    loginWithProvider(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
    }

    logout() {
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChange) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChange(user);
        })
    }

    getProvider(providerName) {
        switch(providerName){
            case 'google':
                return googleProvider;
            default:
                new Error(`Not Supported Provider ${providerName}`);
        }
    }
}

export default AuthService;