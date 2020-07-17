import React, {Component} from 'react';
import s from './Navbar.module.css'
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import BasketDemo from './Shopping/Basket/Basket.demo';
import Example from './AutoSuggest';
import { totalCount } from './store/selectors/basketSelector';
import {  withTranslation } from "react-i18next";

class Navbar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            shown: false
        }
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
                            onMouseLeave={()=> this.setState({shown: false})}
                        >
                            <span>{totalItems}</span>
                            <span className={s.span}>{t("navbar.basket")}</span>
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
        totalItems: totalCount(state),
    };
}



export default connect(mapStateToProps)(withTranslation()(Navbar));