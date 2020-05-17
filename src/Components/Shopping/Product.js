import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addItem, increment } from "../store/actions/index";


class Product extends Component {
    handleClick = () => {
        const id = this.props.match.params.id;
        const { total } = this.props
        this.props.addItem( {id} );
        this.props.increment( total )
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <ProductCard 
                onClick={this.handleClick} 
                product={list.find(i => i.id == id)} 
                ShowBuy
            />
        )
    }    
}

function mapDispatchToProps(dispatch) {
    return {
      addItem: item => dispatch(addItem(item)),
      increment: total => dispatch(increment(total))
    };
}
export default withRouter(connect(null, mapDispatchToProps)(Product))
