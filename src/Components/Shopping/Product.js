import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addArticle } from "../actions/index";
import store from '../store';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        const { id } = this.state
        this.props.addArticle( {id} );
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <ProductCard 
                onClick={this.handleClick} 
                product={list.find(item => item.id == id)} 
                ShowBuy
            />
        )
    }    
}

function mapDispatchToProps(dispatch) {
    return {
      addArticle: article => dispatch(addArticle(article))
    };

  }
export default withRouter(connect(null, mapDispatchToProps)(Product))
