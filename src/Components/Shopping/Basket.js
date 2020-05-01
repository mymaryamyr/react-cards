import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import s from "../../CSS.module/Basket.module.css"


class Basket extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            error: null,
            isLoading: false,
            page: []
        }
    }
    componentDidMount () {
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoading: true,
                    page: result.page
                })
            },
            (error) => {
                this.setState({
                    isLoading: true,
                    error
                })
            }
        )
    }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    
    }
    render () {
        const {isLoading, error, page} = this.state
        if(error) {
            return <p>Error: {error.message}</p>
        } else if(!isLoading) {
            return <div>
                        <span>درحال بارگذاری</span>
                        <FontAwesomeIcon className={s.icon} icon={fas, faSpinner} />    
                    </div>
        } else {
            return (
                <div>
                    <p>{this.props.count}</p>

                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
      count: state.count
    };
}

export default connect(mapStateToProps)(Basket);