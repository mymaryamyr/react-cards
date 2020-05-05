import React, {Component} from 'react';
import { connect } from 'react-redux';
import list from '../../data.json'
import ProductCard from './ProductCard';
import BasketDetail from './BasketDetail';

const Basket = ({ articles }) => (
    <div>
      {articles.map(el => (
        <div>
            <BasketDetail
                product={list.find(item => item.id == el.id)}
            />
        </div>
      ))}
    </div>
);

function mapStateToProps(state) {
    return {
      articles: state.articles
    };
}



export default connect(mapStateToProps)(Basket);