import React, { Component } from 'react';
import slideImg from "../../img/safron.png"
import arrowImg from '../../img/icon.png'
import s from './AboutUs.module.css';
import {  withTranslation } from "react-i18next";
import PropTypes from 'prop-types';

class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        }
    }
    nextArrow = () =>{
        this.setState ({
            active: true
        })
    }
    render() {
        const activeClass = this.state.active ? s.left : null
        const { t } = this.props;

        return (
            <div>
                <h2>{t("about.title")}</h2>
                <p style={{maxWidth: '600px',margin: 'auto'}}>{t("about.description")}</p>
                <div>
                    <img src={arrowImg} className={s.arrow} onClick={this.nextArrow} alt="arrow"/>
                    <div className={s.containerDiv}>
                        <div className={s.outsideDiv}>
                            <div className={`${s.insideDiv} ${activeClass}`} >
                                <img src={slideImg} className={s.img} alt="slider"/>
                                <img src={slideImg} className={s.img} alt="slider"/>
                                <img src={slideImg} className={s.img} alt="slider"/>
                                <img src={slideImg} className={s.img} alt="slider"/>
                                <img src={slideImg} className={s.img} alt="slider"/>
                            </div>
                        </div>
                    </div>
                    <img src={arrowImg} className={s.arrow} alt="arrow" />
            
                </div>      
            </div>
        )
    }
}
AboutUs.propTypes = {
    t: PropTypes.func,
  }

export default withTranslation()(AboutUs);