import React, { Component, PropTypes} from 'react';
import ProductCard from './ProductCard';
import styles from '../../CSS.module/Card.module.css';


class ProductList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            productList: this.props.list,
            defaultProduct: JSON.parse(JSON.stringify(this.props.list)) ,
            filtered: []
        };
    }

    changeSort = (e) => {
        let sorted
        if (e.target.value === 'price') {
            sorted = this.state.productList.sort((a, b) =>  a.price < b.price ? -1 : 1);
        } else if (e.target.value === 'quality') {
            sorted = this.state.productList.sort((a, b) =>  a.quality_score < b.quality_score ? 1 : -1);
        } else {
            sorted = JSON.parse(JSON.stringify(this.state.defaultProduct));
        }

        this.setState({
            productList: sorted
        });
    }
    filterByWeight = (e) => {
        let filtered;
        if (e.target.value === '1') {
            filtered = this.props.list.filter(product => product.weight == 1);
        } else if (e.target.value === '2') {
            filtered = this.props.list.filter(product => product.weight == 2);
        } else if (e.target.value === '3') {
            filtered = this.props.list.filter(product => product.weight == 3);
        } else {
            filtered = JSON.parse(JSON.stringify(this.state.defaultProduct));
        }
        this.setState({
            productList: filtered,
        });
    }

    render () {
        return (
            <div>
                <select value={this.changeSort.productList} onChange={this.changeSort}>
                    <option value="default">Default</option>
                    <option value="price">Price</option>
                    <option value="quality">Quality</option>
                </select>

                <select value={this.changeSort.productList} onChange={this.filterByWeight}>
                    <option value="no-filter">No Filter</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>

                <ul className={styles.ul}>
                    {this.state.productList.map(this.createListItem)}
                </ul>
            </div>
        )
    }
    createListItem (product) {
        return (
            <li className={styles.li} key={product.id}>
                <ProductCard product={product} />
            </li>  
        )
    }
}

export default ProductList;
