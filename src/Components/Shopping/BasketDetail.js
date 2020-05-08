import React from 'react';
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import s from './BasketDetail.module.css'


function BasketDetail(props) {
    return (
            <tbody>
                <tr className={s.tr}>
                        <td> 
                            <Link to={"/product/" + props.id}>
                                <img className={s.img} 
                                    src={props.product.product_thumb_url} 
                                    alt="Saffron">
                                </img>  
                            </Link>  
                        </td>
                        <td>
                            <Link to={"/product/" + props.id}>
                                <p>{props.product.id}</p>
                            </Link>
                        </td>
                        <td>
                            <p>{props.product.price}</p>
                        </td>
                        <td>
                            <button onClick={props.onClick}>حذف</button>
                        </td>
                </tr>           
            </tbody>
    );
}

export default BasketDetail;