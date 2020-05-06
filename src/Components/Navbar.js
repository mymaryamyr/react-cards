import React, {Component} from 'react';
import s from '../CSS.module/Navbar.module.css'
import routes from '../config/routes';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import store from './store';
import { addArticle } from './actions';


class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: ""
        }
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
                <span>{this.props.count}</span>
            </div>
    
        )
    }
}

function mapStateToProps(state) {
    return {
      count: state.count
    };
}



export default connect(mapStateToProps)(Navbar);