import React from 'react';
import BoardDescription from './header/BoardDescription';
import MenuDescription from './header/MenuHistory';
import './../Styles/header.scss';

export default class Header extends React.Component {
    render() {
        return(
            <div className="App__header">
                <BoardDescription />
                <MenuDescription />
            </div>
        )
    }
}