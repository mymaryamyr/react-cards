import React, {Component} from 'react';
import s from './Navbar.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



class Navbar extends Component {
    render () {
        const { TotalCount } = this.props
        return (
            <div>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                        <Link to="/basket">
                            <span>{TotalCount}</span>
                            <span className={s.span}>Basket</span>
                        </Link>
                    </li>
                </ul>
            </div>
    
        )
    }
}

function mapStateToProps(state) {
    return {
        TotalCount: state.TotalCount
    };
}



export default connect(mapStateToProps)(Navbar);