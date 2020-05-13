import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    withRouter,
} from "react-router-dom";
import { connect } from 'react-redux';
import ProductCard from './ProductCard';
import list from '../../data.json'
import { addItem } from "../store/actions/index";


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick () {
        const { id } = this.state
        const { count } = this.props
        this.props.addItem( {id , count} );
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
      addItem: TotalCount => dispatch(addItem(TotalCount)),
    };

}
export default withRouter(connect(null, mapDispatchToProps)(Product))
