import React from 'react';

export default class NewBoardName extends React.Component {
    render() {
        return(
            <div className="App__header__boardName" style={{display: this.props.show}}>
                <div>
                    <span>Rename Board</span>
                    <span className="close"></span>
                </div>
                {/* <hr/> */}
                <h3>Name</h3>
                <div className="App__header__boardName__text">
                    <input type="text"/>
                </div>
                <button>Rename</button>
            </div>
        )
    }
}