import React from 'react';
import '../../App.css'
import s from './Card.module.css';
import {
    Link
  } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faTree, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

function ProductCard(props) {
    const { t } = useTranslation();
    return (
        <div className={`${s.card} ${s.a}`}> 
            <p>{t("productCard.id")} : {props.product.id}</p>
            <img src={props.product.product_thumb_url} alt="Saffron"></img>
            <p>{t("productCard.type")} : {props.product.product_type}</p>
            <p>{t("productCard.name")} : {t("productCard.saffron")}</p>
            <p>{t("productCard.weight")} : {props.product.weight}</p>
            <p>{t("productCard.price")} : {(props.product.price).toLocaleString()}</p>
            <button onClick={props.onClick} className={s.button}><Link className={s.link} to={'/product/' + props.product.id}>{t("productCard.details")}</Link></button>
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
ProductCard.propTypes = {
    product: PropTypes.object,
    onClick: PropTypes.func
}

export default ProductCard;