import React, {Component} from 'react';
import s from './Navbar.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { increment } from './store/actions/index'



class Navbar extends Component {
    render () {
        const { total } = this.props
        return (
            <div>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                        <Link to="/basket">
                            <span>{total}</span>
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
        total: state.total
    };
}



export default connect(mapStateToProps)(Navbar);