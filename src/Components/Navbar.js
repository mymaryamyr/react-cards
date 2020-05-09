import React, {Component} from 'react';
import s from '../CSS.module/Navbar.module.css'
import routes from '../config/routes';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }
    render () {
        return (
            <div>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/register">Register/Logout</Link></li>
                    <li><Link to="/basket">Basket</Link></li>
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