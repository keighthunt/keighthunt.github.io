import React, { Component } from 'react';
import styled from 'styled-components';

const Color = styled.span`
    color: ${props => props.color};
`;

const FullScreen = styled.div`
    height: 100vh;
    width: 100vw;
    color: #fff
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	-webkit-animation: Gradient 12s ease infinite;
	-moz-animation: Gradient 12s ease infinite;
	animation: Gradient 12s ease infinite;
    
    @-webkit-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
    @-moz-keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    
    @keyframes Gradient {
        0% {
            background-position: 0% 50%
        }
        50% {
            background-position: 100% 50%
        }
        100% {
            background-position: 0% 50%
        }
    }
    h1 {
        font-size: 32pt;
        line-height: 36pt
        overflow: hidden;
        margin: 0 auto;
        white-space: nowrap;
        
        &:first-of-type {
            border-right: .15em solid white;
            animation: 
                typing 1.5s steps(10, end),
                blink-caret .5s step-end infinite;
            animation-delay: 2s;
        }
        
        &:last-of-type {
            border-right: .15em solid white;
            animation: 
                typing 3.5s steps(30, end),
                blink-caret .5s step-end infinite;
            animation-delay: 7s;
        }
    }
    
    @keyframes typing {
      0% { width: 0 }
      100% { width: 100% }
    }
    
    /* The typewriter cursor effect */
    @keyframes blink-caret {
      from, to { border-color: transparent }
      50% { border-color: white }
    }
    
    
`;

export default class Header extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <FullScreen
                dark
                className="flex"
            >
                <div className="header-container">
                    <h1>Hello...</h1>
                    <h1>My name is <Color color={'pink'}>Kate Hunt</Color>,</h1>
                    <h1>I'm a Front End Developer.</h1>
                </div>
            </FullScreen>
        );
    }
}