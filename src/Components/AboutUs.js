import React, { Component } from 'react';
import slideImg from "../img/safron.png"
import arrowImg from '../img/icon.png'
import s from './AboutUs.module.css'

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
        console.log(this.state.active)
    }
    render() {
        const activeClass = this.state.active ? s.left : null
        return (
            <div>
                <h2>About</h2>
                <p>hfbuhvcbdslnfcuwfhqeubhewfnlwenkjd</p>
                <div>
                    <img src={arrowImg} className={s.arrow} onClick={this.nextArrow}/>
                    <div className={s.containerDiv}>
                        <div className={s.outsideDiv}>
                            <div className={`${s.insideDiv} ${activeClass}`} >
                                <img src={slideImg} className={s.img}/>
                                <img src={slideImg} className={s.img}/>
                                <img src={slideImg} className={s.img}/>
                                <img src={slideImg} className={s.img}/>
                                <img src={slideImg} className={s.img}/>
                            </div>
                        </div>
                    </div>
                    <img src={arrowImg} className={s.arrow}/>
            
                </div>      
            </div>
        )
    }


}

export default AboutUs;