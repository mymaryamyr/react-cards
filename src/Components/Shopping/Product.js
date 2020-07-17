import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
    Link,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addItem } from "../store/actions/index";
import s from './Card.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTree, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import {  withTranslation } from "react-i18next";

class Product extends Component {
    handleClick = (e) => {
        const id = this.props.match.params.id;
        const value = document.getElementById("selectQuantity").value
        const { addItem } = this.props
        addItem( {id, qty: value})
    }
    render() {
        const { t } = this.props
        const id = this.props.match.params.id;
        const product = list.find(i => i.id == id)
        return (
            <div className={`${s.card} ${s.a}`}> 
                <p>{t("product.id")} : {product.id}</p>
                <p>{t("product.weight")} : {product.weight}</p>
                <p>{t("product.price")} : {(product.price).toLocaleString()}</p>
                <select id="selectQuantity" className={s.select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button onClick={this.handleClick} className={s.button}><Link className={s.link} to={'/product/' + product.id}>{t("product.buy")}</Link></button>
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
    };
}
export default connect(null, mapDispatchToProps)(withTranslation()(Product));
