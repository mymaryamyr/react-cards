import React, { Component } from 'react';

class PlayGround extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility : false
        }
    }
    toggle = () => {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        let {visibility} = this.state
        return(
            <div>
                <button onClick={this.toggle}>
                    {visibility ? "hide" : "show"}
                </button>
                {visibility && (
                    <p>there is something</p>
                )}
            </div>
        )
    }
}

export default PlayGround;