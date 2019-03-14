import React, { Component } from 'react';
export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <div
                gradient
            >
                <h1>About</h1>
            </div>
        );
    }
}