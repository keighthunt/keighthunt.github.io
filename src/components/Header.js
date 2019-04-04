import React, { Component } from 'react';
import styled from 'styled-components';

const Color = styled.span`
    color: ${props => props.color};
`;

const FullScreen = styled.div`
    height: calc(100vh - 50px);
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
    .header-container {
        border: 4px solid #fff;
        padding: 15px 20px;
    }
    
    h1 {
        font-size: 32pt;
        line-height: 36pt
        overflow: hidden;
        margin: 0 auto;
        white-space: nowrap;
    }
`;

const Navigation = styled.nav`
    border-bottom: 2px solid #444649;
    div {
        margin: 0 auto;
        padding: 0 20px;
        max-width: 1024px;
        a {
            display: inline-block;
            text-transform: uppercase;
            width: 20%;
            padding: 16px 0;
            text-align: center;
            cursor: pointer;
        }
    }
`;

export default class Header extends Component {
    render() {
        const { navigation } = this.props.resumeData;
        return (
            <div>
                <FullScreen
                    dark
                    className="flex"
                >
                    <div className="header-container">
                        <h1>Hello...</h1>
                        <h1>My name is <Color color={'pink'}>Kate Hunt</Color>,</h1>
                        <h1>I'm a Front End Developer from London.</h1>
                    </div>
                </FullScreen>
                <Navigation>
                    <div>
                        {
                            navigation && navigation.map((item, i)=>{
                                return(
                                    <a key={i + item} href={"#" + item}>{item}</a>
                                )
                            })
                        }
                    </div>
                </Navigation>
            </div>
        );
    }
}