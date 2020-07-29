import React from 'react';
import list from '../../data.json'
import ProductList from './ProductList';


function Listing () {
    return (
        <div>
            <ProductList list={list} />
        </div>
    )
}
export default  Listing;
