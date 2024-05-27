import './Auth.css';
import { auth, provider } from '../../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import AuthModal from '../AuthModal/AuthModal';

const cookies = new Cookies();

const Auth = (props) => {
    // JS
    const { setIsAuth } = props;

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log(result);
            cookies.set('auth-token', result.user.refreshToken);
            setIsAuth(true);
        } catch (err) {
            console.error(err);
        }
    };

    // JS Modal
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleShowModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModel = () => {
        setModalIsOpen(false);
    };

    // HTML
    return (
        <div className="auth-container">
            <div className="auth">
                <span className="auth-text">
                    Sign In Continue To The Application
                </span>
                <button onClick={handleShowModal} className="auth-button">
                    Sign In
                </button>
            </div>

            {/* Modal */}
            {modalIsOpen === true ? (
                <AuthModal
                    closeModal={handleCloseModel}
                    signInWithGoogle={signInWithGoogle}
                />
            ) : null}
        </div>
    );
};

export default Auth;
