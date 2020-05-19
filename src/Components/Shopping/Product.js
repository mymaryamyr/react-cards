import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
    Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addItem, increment } from "../store/actions/index";
import s from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTree, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';


class Product extends Component {
    handleClick = (e) => {
        const id = this.props.match.params.id;
        const product = list.find(i => i.id == id)
        const value = document.getElementById("selectQuantity").value
        const { totalCount } = this.props
        const { addItem, increment } = this.props
        for(let i=0; i < value; i++ ) {
            addItem( { id } );
            increment( { totalCount } )
            product.quantity ++

        }
    }
    render() {
        const id = this.props.match.params.id;
        const product = list.find(i => i.id == id)
        return (
            <div className={`${s.card} ${s.a}`}> 
                <p>id: {product.id}</p>
                <p>weight: {product.weight}</p>
                <p>price: {(product.price).toLocaleString()}</p>
                <select id="selectQuantity" className={s.select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleClick} className={s.button}><Link className={s.link} to={'/product/' + product.id}>خرید</Link></button>
                <div className={s.footer}>
                    <p className={s.name}>{product.farmer_name}</p>
                    <p className={s.score}>{product.quality_score}</p>
                    {!product.organic_fertilizer ? null : <FontAwesomeIcon className={s.tree} icon={fas, faTree} />}
                    {!product.chemical_afatkosh ? null :  <FontAwesomeIcon className={s.poison} icon={fas, faSkullCrossbones} />}
                </div>   
            </div>
        )
    }    
}

function mapDispatchToProps(dispatch) {
    return {
      addItem: item => dispatch(addItem(item)),
      increment: totalCount => dispatch(increment(totalCount))
    };
}
export default withRouter(connect(null, mapDispatchToProps)(Product))
