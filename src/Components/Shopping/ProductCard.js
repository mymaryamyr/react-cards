import React, { Component } from 'react';
import '../../App.css'
import s from '../../CSS.module/Card.module.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTree, faSkullCrossbones, faCircle } from '@fortawesome/free-solid-svg-icons';


function ProductCard(props) {
    return (
        <div className={`${s.card} ${s.a}`}> 
            <p>id: {props.product.id}</p>
            <img src={props.product.product_thumb_url} alt="Saffron"></img>
            <p>product_type: {props.product.product_type}</p>
            <p>product_name: {props.product.product_name}</p>
            <p>weight: {props.product.weight}</p>
            <p>price: {props.product.price}</p>
            <button onClick={props.onClick} className={s.button}><Link className={s.link} to={'/product/' + props.product.id}>مشاهده</Link></button>
            <div className={s.footer}>
                <img className={s.img} src={props.product.farmer_thumb} alt="farmer in the land"></img>
                <p className={s.name}>{props.product.farmer_name}</p>
                <p className={s.score}>{props.product.quality_score}</p>
                {!props.product.organic_fertilizer ? null : <FontAwesomeIcon className={s.tree} icon={fas, faTree} />}
                {!props.product.chemical_afatkosh ? null :  <FontAwesomeIcon className={s.poison} icon={fas, faSkullCrossbones} />}
            </div>
            
        </div>
    );
}

export default ProductCard;