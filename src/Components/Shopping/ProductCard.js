import React from 'react';
import '../../App.css'
import style from '../../CSS.module/Card.module.css';

function ProductCard(props) {
    return (
        <div className={`${style.card} ${style.a}`}> 
            <p>id: {props.product.id}</p>
            <img src={props.product.product_thumb_url} alt="Saffron"></img>
            <p>product_type: {props.product.product_type}</p>
            <p>product_name: {props.product.product_name}</p>
            <p>weight: {props.product.weight}</p>
            <p>price: {props.product.price}</p>
            <div>
                <img src={props.product.farmer_thumb} alt="farmer in the land"></img>
                <p>farmer: {props.product.farmer_name}</p>
                <p>quality: {props.product.quality_score}</p>
                <p>organic: {props.product.organic_fertilizer.toString()}</p>
                <p>chemical: {props.product.chemical_afatkosh.toString()}</p>
            </div>
            
        </div>
    );
}

export default ProductCard;