import React, {Component} from 'react';
import s from '../CSS.module/Navbar.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";



class Navbar extends Component {
    render () {
        const { items } = this.props
        return (
            <div>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/register">Register/Logout</Link></li>
                    <li>
                        <Link to="/basket">
                            <span>{items.length}</span>
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
      items: state.items
    };
}



export default connect(mapStateToProps)(Navbar);