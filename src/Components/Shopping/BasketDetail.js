import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";
import s from './BasketDetail.module.css'


function BasketDetail(props) {
    return (
        <table className={s.table}> 
            <tbody>
                <td>
                    <img src={props.product.product_thumb_url} alt="Saffron"></img>
                </td>
                <td>
                    <p>id: {props.product.id}</p>
                </td>
                <td>
                    <p>price: {props.product.price}</p>
                </td>
                <td>
                    <button>
                     حذف
                    </button>
                </td>
            </tbody>
            
            
            
        </table>
    );
}

export default BasketDetail;