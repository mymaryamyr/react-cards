import React, {Component} from 'react';
import s from '../CSS.module/Navbar.module.css'
import routes from '../config/routes';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


class Navbar extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    
    }
    addId = () => {
        this.props.dispatch({ type: 'AddId' });
    }
    render () {
        return (
            <div>
                <ul className={s.navbar}>
                    <li><Link to={routes.listing.path}>Listing</Link></li>
                    <li><Link to={routes.aboutUs.path}>About Us</Link></li>
                    <li><Link to={routes.register.path}>Register/Logout</Link></li>
                    <li><Link to={routes.basket.path}>Basket</Link></li>
                </ul>
                <span className={s.span}>{this.props.count}</span>
                <span className={s.span}>{this.props.items}</span>
            </div>
    
        )
    }
}
function mapStateToProps(state) {
    return {
      count: state.count,
      items: state.items
    };
}
export default connect(mapStateToProps)(Navbar);