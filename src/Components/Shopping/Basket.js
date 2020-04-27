import React, {Component} from 'react';
import { connect } from 'react-redux';


class Basket extends Component {
        constructor(props) {
            super(props) 
            this.state = {
                error: null,
                isLoaded: false,
                page: []
            }
        }

    componentDidMount () {
        fetch("https://hn.algolia.com/api/v1/search?query=redux")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    page: result.page
                })
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    increment = () => {
        this.props.dispatch({ type: 'INCREMENT' });
    
    }
    render () {
        const {isLoaded, error, page} = this.state
        if(error) {
            return <p>Error: {error.message}</p>
        } else if(!isLoaded) {
            return <p>Loading ...</p>
        } else {
            return (
                <div>
                    <p>{this.props.count}</p>
                    <ul>
                    <li>
                        {page.title}
                    </li>
                    </ul>
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