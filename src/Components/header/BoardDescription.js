import React from 'react';
import NewBoardName from './NewBoardName';

export default class BoardDescription extends React.Component {
    constructor() {
        super()
        this.state = {
            display : "none"
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({display: "block"});
    }
    render() {
        return(
            <div className="App__header__title">
                <div onClick={this.handleClick}>
                    <span>Board Name</span>
                </div>
                <NewBoardName show={this.state.display}/>
            </div>
        )
    }
}