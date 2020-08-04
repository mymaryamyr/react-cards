import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import { getListing } from './GetListing'


function Listing () {
    const [Listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)

    const loadList = async () => {
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
    };
    useEffect(() => {
        loadList();
    }, []);
    return (
        <div>
            {
                loading
                ? <p>Loading</p>
                : <ProductList list={Listing} />
            }
        </div>
    )
}
export default  Listing;
