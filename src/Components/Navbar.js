import React, {Component} from 'react';
import s from './Navbar.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import BasketDemo from './Shopping/Basket/Basket.demo';
import Example from './AutoSuggest';


class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            shown: false
        }
    }
    render () {
        const { totalCount } = this.props
        return (
            <div className={s.navContainer}>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>Listing</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li>
                        <Link to="/basket"
                            onMouseEnter={()=> this.setState({shown: true})}
                            onMouseLeave={()=> this.setState({shown: false})}
                        >
                            <span>{totalCount}</span>
                            <span className={s.span}>Basket</span>
                        </Link>
                        <div className={s.div}>
                            {this.state.shown && (
                                <BasketDemo 
                                />
                            )}
                        </div>
                    </li>
                </ul>
                <Example/>
            </div>
    
        )
    }
}

function mapStateToProps(state) {
    return {
        totalCount: state.totalCount,
    };
}



export default connect(mapStateToProps)(Navbar);