import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './AddNewAdviceModal.css';

const AddNewAdviceModal = (props) => {
    // JS
    const { favoriteAdvices, setFavoriteAdvices, savedFavoriteAdvices } = props;

    const [addedCustomAdviceToFavorites] = useState(savedFavoriteAdvices);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting, reset },
    } = useForm();

    const onSubmit = async (data, e) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const newCustomAdvice = [...favoriteAdvices];

        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hour = d.getHours();
        const minutes = d.getMinutes();
        const currentDate = `${day}/${month}/${year} ${hour}:${minutes}`;

        const newAdvice = {
            ...data,
            addedAt: currentDate.toString(),
        };

        newCustomAdvice.push(newAdvice);

        setFavoriteAdvices(newCustomAdvice);

        e.target.reset();
    };

    useEffect(() => {
        localStorage.setItem(
            'advices',
            JSON.stringify(addedCustomAdviceToFavorites)
        );
    }, [addedCustomAdviceToFavorites]);
    // HTML
    return (
        <div className="custom-advice-modal-container">
            <div
                className="custom-advice-modal-overlay"
                onClick={props.closeShowAdviceModal}
            ></div>

            {/* Card */}
            <div className="custom-advice-modal-card">
                <h2 className="custom-advice-card-title">
                    Add a custom advice
                </h2>
                <form
                    className="custom-advice-modal-inputs"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        {...register('id', {
                            required: 'Id is required!',
                            min: {
                                value: 200,
                                message: 'Id must be higher than 200.',
                            },
                        })}
                        type="number"
                        className="custom-advice-input"
                        placeholder="Add Advice ID"
                    />
                    {errors.id && (
                        <div style={{ color: 'red', fontSize: '13px' }}>
                            {errors.id.message}
                        </div>
                    )}
                    <input
                        {...register('content', {
                            required: 'Content is required!',
                            minLength: {
                                value: 3,
                                message:
                                    'Content must have minimum 3 characters.',
                            },
                        })}
                        type="text"
                        className="custom-advice-input"
                        placeholder="Add Advice CONTENT"
                    />
                    {errors.content && (
                        <div style={{ color: 'red', fontSize: '13px' }}>
                            {errors.content.message}
                        </div>
                    )}
                    <button
                        disabled={isSubmitting}
                        type="submit"
                        className="custom-advice-add-advice"
                    >
                        {isSubmitting ? 'Loading...' : 'Add Advice'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddNewAdviceModal;
