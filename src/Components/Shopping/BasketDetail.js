import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import s from './BasketDetail.module.css'


function BasketDetail(props) {
    return (
            <tr className={s.tr}>
                    <td>
                        <Link to={"/product/" + props.id}>
                            <img class={s.img} src={props.product.product_thumb_url} alt="Saffron"></img>
                        </Link>
                    </td>
                    <td>
                        <p>{props.product.id}</p>
                    </td>
                    <td>
                        <p>{props.product.price}</p>
                    </td>
                    <td>
                        <button onClick={onclick}>
                        حذف
                        </button>
                    </td>
            </tr>
    );
}

export default BasketDetail;