import React, {Component} from 'react';
import s from './Navbar.module.css'
import { connect } from 'react-redux';
import {
    Link
  } from "react-router-dom";
import BasketDemo from '../Shopping/Basket/Basket.demo';
import Search from '../Search/AutoSuggest';
import { totalCount } from '../store/selectors/basketSelector';
import {  withTranslation } from "react-i18next";
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            shown: false,
        }
    }
    handleHover = () => {
        this.setState({stay: true});
    }
    handleLeave = () => {
        setTimeout(() => {        
            this.setState({stay: false});
        }, 500);
    }
    render () {
        const { totalItems, i18n, t } = this.props
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
        };
        return (
            <div className={s.navContainer}>
                <div className={s.langContainer}>
                    <button onClick={() => changeLanguage("fa")}>fa</button>
                    <button onClick={() => changeLanguage("en")}>en</button>
                </div>
                <ul className={s.navbar}>
                    <li><Link to='/listing'>{t("navbar.listing")}</Link></li>
                    <li><Link to="/about-us">{t("navbar.about-us")}</Link></li>
                    <li><Link to="/login">{t("navbar.login")}</Link></li>
                    <li>
                        <Link to="/basket"
                            onMouseEnter={()=> this.setState({shown: true})}
                            onMouseLeave={()=> setTimeout (() => this.setState({shown: false}), 1000)}
                        >
                            <span>{totalItems}</span>
                            <span className={s.span}>{t("navbar.basket")}</span>
                        </Link>
                        <div className={s.div}>
                            {(this.state.shown || this.state.stay) && (
                                <BasketDemo onMouseEnter={this.handleHover} onMouseLeave={this.handleLeave}/>
                            )}
                        </div>
                    </li>
                </ul>
                <Search/>
            </div>
    
        )
    }
}
Navbar.propTypes = {
    totalItems: PropTypes.number,
    changeLanguage: PropTypes.func,
    t: PropTypes.func,
    i18n: PropTypes.object,
}
function mapStateToProps(state) {
    return {
        totalItems: totalCount(state),
    };
}



export default connect(mapStateToProps)(withTranslation()(Navbar));