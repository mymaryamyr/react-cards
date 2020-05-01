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
    render() {
        const id = this.props.match.params.id;
        return (
            <ProductCard onClick={this.increment} product={list[id-1]}>
                <button onClick={this.props.onClick}/>
            </ProductCard>
        )
    }    
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
}
export default withRouter(connect(mapStateToProps)(Product))
