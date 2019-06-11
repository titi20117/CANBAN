import React from 'react';
import './../../Styles/header.scss';

export default class NewBoardName extends React.Component {
    render() {
        return(
            <div className="App__header__boardName" style={{display: this.props.show}}>
                <div className="App__header__boardName__info">
                    <span className="App__header__boardName__info__rename">Rename Board</span>
                    <i className="fa fa-close App__header__boardName__info__history"></i>
                </div>
                <hr/>
                <h3>Name</h3>
                <div className="App__header__boardName__description">
                    <input type="text"/>
                </div>
                <button>Rename</button>
            </div>
        )
    }
}