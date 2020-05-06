import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addItem } from "../actions/index";
import { increment } from "../actions/increment";
import store from '../store';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        const { id, count} = this.state
        this.props.addItem( {id} );

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
      addItem: item => dispatch(addItem(item)),
      increment: count => dispatch(increment(count))
    };

}
export default withRouter(connect(null, mapDispatchToProps)(Product))
