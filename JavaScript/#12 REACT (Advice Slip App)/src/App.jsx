import { useState, useEffect } from 'react';
import './App.css';
import { initialAdvice } from './initialAdvice';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteAdvicesModel from './components/FavoriteAdvicesModal/FavoriteAdvicesModal';
import AddNewAdviceModal from './components/AddNewAdviceModal/AddNewAdviceModal';

const savedFavoriteAdvices = JSON.parse(localStorage.getItem('advices') || []);

const App = () => {
    const [advice, setAdvice] = useState(initialAdvice);
    const [isLoading, setIsLoading] = useState(false);
    const [favoriteAdvices, setFavoriteAdvices] =
        useState(savedFavoriteAdvices);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [addAdviceModalIsOpen, setAddAdviceModalIsOpen] = useState(false);

    const currentAdviceIsAddedToFavorites =
        favoriteAdvices.findIndex(
            (favoriteAdvice) => favoriteAdvice.id === advice.id
        ) === -1
            ? false
            : true;

    useEffect(() => {
        localStorage.setItem('advices', JSON.stringify(favoriteAdvices));
    }, [favoriteAdvices.length]);

    // Functions
    const generateAdvice = async () => {
        setIsLoading(true);

        try {
            // block-scoped variables
            const serverResponse = await fetch(
                'https://api.adviceslip.com/advice'
            );
            const {
                slip: { id, advice },
            } = await serverResponse.json();

            setAdvice({
                id,
                content: advice,
            });
        } catch (e) {
            alert('An error occured, try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToFavorites = () => {
        const indexOfCurrentAdvice = favoriteAdvices.findIndex(
            (favoriteAdvice) => favoriteAdvice.id === advice.id
        );

        if (indexOfCurrentAdvice === -1) {
            const newFavoriteAdvices = [...favoriteAdvices];

            const d = new Date();
            const day = d.getDate();
            const month = d.getMonth() + 1;
            const year = d.getFullYear();
            const hour = d.getHours();
            const minutes = d.getMinutes();
            const currentDate = `${day}/${month}/${year} ${hour}:${minutes}`;

            const newAdvice = {
                ...advice,
                addedAt: currentDate.toString(),
            };

            newFavoriteAdvices.push(newAdvice);

            setFavoriteAdvices(newFavoriteAdvices);
        } else {
            const newFavoriteAdvices = [...favoriteAdvices];
            newFavoriteAdvices.splice(indexOfCurrentAdvice, 1);
            setFavoriteAdvices(newFavoriteAdvices);
        }
    };

    const handleRemoveFromFavorites = (indexToDelete) => {
        const adviceToRemove = favoriteAdvices.filter(
            (_, index) => index !== indexToDelete
        );
        setFavoriteAdvices(adviceToRemove);
    };

    // Show modal
    const handleShowModal = () => {
        setModalIsOpen(true);
    };

    const handleCloseModel = () => {
        setModalIsOpen(false);
    };

    // Show Add Advice modal
    const handleShowAddAdviceModal = () => {
        setAddAdviceModalIsOpen(true);
    };

    const handleCloseAddAdviceModal = () => {
        setAddAdviceModalIsOpen(false);
    };
    // HTML
    return (
        <div className="app-container">
            <button
                className="show-favorites-advices"
                onClick={handleShowModal}
            >
                Show Favorites
            </button>

            <button
                className="show-add-advice-modal"
                onClick={handleShowAddAdviceModal}
            >
                Add Advice
            </button>

            {/* Favorites Advices Modal */}
            <div>
                {modalIsOpen === true ? (
                    <FavoriteAdvicesModel
                        closeModal={handleCloseModel}
                        removeFromFavorites={handleRemoveFromFavorites}
                        favoriteAdvices={favoriteAdvices}
                    />
                ) : null}
            </div>

            <div>
                {addAdviceModalIsOpen === true ? (
                    <AddNewAdviceModal
                        closeShowAdviceModal={handleCloseAddAdviceModal}
                        setFavoriteAdvices={setFavoriteAdvices}
                        favoriteAdvices={favoriteAdvices}
                        savedFavoriteAdvices={savedFavoriteAdvices}
                    />
                ) : null}
            </div>

            <div className="advice-card-container">
                <button className="add-favorite" onClick={handleAddToFavorites}>
                    {currentAdviceIsAddedToFavorites === true ? (
                        <FavoriteIcon sx={{ color: 'var(--cardGreen)' }} />
                    ) : (
                        <FavoriteBorderIcon
                            sx={{ color: 'var(--cardGreen)' }}
                        />
                    )}
                </button>

                <span className="advice-id"> ADVICE #{advice.id} </span>
                <span className="advice-content">"{advice.content}"</span>
                <div className="advice-separator">
                    <div className="horizontal-line"></div>
                    <div className="vertical-lines">
                        <div className="vertical-line"></div>
                        <div className="vertical-line"></div>
                    </div>

                    <div className="horizontal-line"></div>
                </div>
                <button
                    className="generate-advice-button"
                    onClick={generateAdvice}
                    disabled={isLoading === true ? true : false}
                >
                    {isLoading === true ? (
                        <div className="spinner"></div>
                    ) : (
                        <div className="generate-button-image"></div>
                    )}
                </button>
            </div>
        </div>
    );
};

export default App;
