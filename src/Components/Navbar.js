import React, {Component} from 'react';
import s from '../CSS.module/Navbar.module.css'
import { connect } from 'react-redux';


class Navbar extends Component {
    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    
    }
    render () {
        return (
            <div>
                <ul className={s.navbar}>
                    {this.props.children}
                </ul>
                <span className={s.span}>{this.props.count}</span>
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