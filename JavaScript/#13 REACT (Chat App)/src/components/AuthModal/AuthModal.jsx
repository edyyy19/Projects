import React from 'react';
import './AuthModal.css';

const AuthModal = (props) => {
    // JS

    const { closeModal, signInWithGoogle } = props;

    // HTML

    return (
        <div className="auth-modal-container">
            <div className="modal-overlay"></div>
            <div className="modal-card">
                <div className="modal-close">
                    <i className="fa-solid fa-xmark" onClick={closeModal}></i>
                </div>
                <span className="modal-card-text">Start Chatting!</span>
                <button
                    className="modal-sign-in-google"
                    onClick={signInWithGoogle}
                >
                    <div className="modal-sign-in-image-google"></div>
                    <span className="modal-sign-in-text">
                        Sign In with Google
                    </span>
                </button>
            </div>
        </div>
    );
};

export default AuthModal;
