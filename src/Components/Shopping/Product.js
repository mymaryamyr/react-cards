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
/*{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }
    componentDidMount() {
        fetch ("C:/maryam/practice/150cards/my-app/src/data.json")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: result.items
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }
}*/
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    
    }
    render() {
    /*{
        const { error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if(!isLoaded) {
            return <div>Loading...</div>
        } else {}
    }*/
        const id = this.props.match.params.id;
        return (
            <div onClick={this.increment}>
                <ProductCard product={list[id-1]}/>
            </div>
        )
    }    
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
}
export default withRouter(connect(mapStateToProps)(Product))
