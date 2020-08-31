import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { getListing } from './GetListing'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import s from './Loading.module.css'


function Listing () {
    const [Listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)

    const loadList = async () => {
        setTimeout(() => {
        getListing()
            .then(response => response.json())
            .then((data) => {
                setListing(data)
                setLoading(false)
                return data
            })
            .catch(( err ) => {
                console.log( err );
                throw err;
            })            
        }, 500);

    };
    useEffect(() => {
        loadList();
    }, []);
    return (
        <div>
            {
                loading
                ? <FontAwesomeIcon class={s.icon} icon={fas, faSync} />
                : <ProductList list={Listing} />
            }
        </div>
    )
}
export default  Listing;
