import './Chat.css';
import { useEffect, useState, useRef } from 'react';
import {
    addDoc,
    collection,
    serverTimestamp,
    onSnapshot,
    query,
    where,
    orderBy,
} from 'firebase/firestore';
import { auth, dataBase } from '../../firebase-config';

export const Chat = (props) => {
    // Props
    const { room } = props;

    // JS
    const [newMessage, setNewMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const messagesRefference = collection(dataBase, 'messages');

    useEffect(() => {
        const queryMessages = query(
            messagesRefference,
            where('room', '==', room),
            orderBy('sentAt')
        );

        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({
                    ...doc.data(),
                    id: doc.id,
                });
            });

            setMessages(messages);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newMessage === '') return;

        await addDoc(messagesRefference, {
            id: auth.currentUser.uid,
            text: newMessage,
            sentAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
            userPhoto: auth.currentUser.photoURL,
        });

        setNewMessage('');
    };

    // Scroll to botom when new message appears
    const listRef = useRef(null);
    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView();
    }, [messages]);

    // HTML
    return (
        <div className="chat-app-container">
            <div className="chat-app">
                <div className="chat-app-overlay"></div>
                <div className="chat-app-room-name">
                    <span className="room-name">
                        Currently you're in {room.toUpperCase()}
                    </span>
                </div>
                <div className="chat-app-messages" ref={listRef}>
                    {messages.map((message) => (
                        <div className="message-container" key={message.id}>
                            <div
                                className="message-user-photo"
                                style={{
                                    backgroundImage: `url(${message.userPhoto})`,
                                }}
                            ></div>

                            <div className="message-user-container">
                                <span className="message-user">
                                    {message.user}
                                </span>
                                <span className="message">{message.text}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <form className="chat-app-input" onSubmit={handleSubmit}>
                    <input
                        className="chat-app-input-message"
                        placeholder="Type your message..."
                        onChange={(e) => setNewMessage(e.target.value)}
                        value={newMessage}
                    />
                    <button type="submit" className="chat-app-send-message">
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};
