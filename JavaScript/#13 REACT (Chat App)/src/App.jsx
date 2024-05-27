import { useState, useRef } from 'react';
import './App.css';
import Auth from './components/Auth/Auth';
import Cookies from 'universal-cookie';
import { Chat } from './components/Chat/Chat';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
const cookies = new Cookies();

const App = () => {
    // JS

    const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
    const [room, setRoom] = useState(null);

    const roomInputRefference = useRef(null);

    const handleSignOut = async () => {
        await signOut(auth);
        cookies.remove('auth-token');
        setIsAuth(false);
        setRoom(null);
    };

    // HTML

    if (!isAuth) {
        return (
            <div>
                <Auth setIsAuth={setIsAuth} />
            </div>
        );
    }

    return (
        <div className="room-body">
            {room ? (
                <Chat room={room} />
            ) : (
                <div className="room">
                    <label className="room-text">Select the Room Name</label>

                    <select
                        name="option-filter"
                        id="options-filter"
                        className="room-options"
                        ref={roomInputRefference}
                    >
                        <option value="room1">Room 1</option>
                        <option value="room2">Room 2</option>
                        <option value="room3">Room 3</option>
                        <option value="test-room1">test-room1</option>
                    </select>

                    <button
                        onClick={() =>
                            setRoom(roomInputRefference.current.value)
                        }
                        className="room-enter"
                    >
                        Join Chat
                    </button>
                </div>
            )}

            <div className="sign-out">
                <button onClick={handleSignOut} className="sign-out-button">
                    Sign Out
                </button>
            </div>
        </div>
    );
};

export default App;
