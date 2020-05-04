import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter,
    useParams
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'


class Product extends Component {

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    }
    addId = () => {
        this.props.dispatch({  type: 'ADDID',
        items: 3 })
    }
    render() {
        const id = this.props.match.params.id;
        return (
            <ProductCard onClick={() => { {this.increment()}; {this.addId()}; }} product={list.find(item => item.id == id)} ShowBuy/>
        )
    }    
}

function mapStateToProps(state) {
    return {
      count: state.count,
      items: state.items
    };
}
export default withRouter(connect(mapStateToProps)(Product))
