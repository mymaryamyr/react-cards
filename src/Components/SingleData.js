import React, { Component, useEffect, useState } from 'react';
import style from '../CSS.module/Card.module.css';
import { useParams } from 'react-router-dom';

export default () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        console.log(`calling api for ${id}`);
        setTimeout(() => {
            setLoading(false);
        }, 5000);

        setTimeout(() => {
            setError(true);
        }, 5000);
    }, []);

    if (loading) {
        return <p>Loading ...</p>;
    }

    if (error) {
        return <p>Something went wrong</p>
    }

    return <p>{id}</p>;
};
