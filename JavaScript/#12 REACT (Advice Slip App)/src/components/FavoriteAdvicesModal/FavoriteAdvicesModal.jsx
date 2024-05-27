import './FavoriteAdvicesModal.css';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const FavoriteAdvicesModel = (props) => {
    return (
        <div className="favorite-advices-modal-container">
            <div
                className="favorite-advices-overlay"
                onClick={props.closeModal}
            ></div>
            <div className="favorite-advices-modal-card">
                <h2 className="favorite-advices-modal-title">
                    <AutoAwesomeIcon sx={{ color: '#ffd250' }} />
                    Favorite Advices
                </h2>
                <div className="favorite-advice-container">
                    {props.favoriteAdvices.map((advice, index) => (
                        <div className="favorite-advice" key={advice.id}>
                            <span className="favorite-advice-id">
                                ADVICE #{advice.id}
                            </span>
                            <span className="favorite-advice-content">
                                {advice.content}
                            </span>
                            <span className="favorite-advice-date">
                                {advice.addedAt}
                            </span>

                            <div
                                className="favorite-advice-delete-btn"
                                value={index}
                                onClick={() => props.removeFromFavorites(index)}
                            >
                                <HighlightOffIcon
                                    sx={{
                                        color: 'var(--cardGreen)',
                                        '&:hover': {
                                            color: 'red',
                                            transition: '0.2s',
                                        },
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FavoriteAdvicesModel;
