import React, { Component } from 'react';
import styled from 'styled-components';

import { debounce } from './Shared';

const Color = styled.span`
    color: ${props => props.color};
`;

const FullScreen = styled.div`
    height: 100vh;
    width: 100vw;
    color: #000;
    
    h1 {
        color: #222;
        font-size: 112px;
        font-size: 7vw;
        line-height: 110%;
        display: inline-block;
        font-family: 'Lobster', cursive;
        
        & + h1 {
            margin: 0 0 0 15px;
        }
        
        @media screen and (min-width: 1200px) {
            font-size: 80px;
        }
        
        @media screen and (max-width: 667px) {
            font-size: 68px;
            font-size: 18vw;
        }
    }
    
    .header-container {
        top: 34vh;
        width: 100vw;
        position: absolute
    }

    .hero {
      position: relative;
      background: #2b5876;
      background: -webkit-linear-gradient(to right, #4e4376, #2b5876);
      background: linear-gradient(to right, #4e4376, #2b5876);
      height: 100%;
    }
    
    .text {
        position: relative;
        overflow: hidden;
        text-align: center;
        
        & + .text {
            h1 {
                @media screen and (max-width: 667px) {
                    font-size: 25px;
                    font-size: 8.7vw;
                }
            }
        }
    }
    
    .animate {
        animation: animate 1.2s cubic-bezier(0.2,0.6,0.2,1);
        animation-fill-mode: backwards;
    }
    
    @keyframes animate {
        0% {
            transform: translateY(100%)
        }
        100% {
            transform: translateY(0)
        }
    }
    
    .delay-1 {
        -webkit-animation-delay: .3s;
        animation-delay: .3s;
    }
    
    .delay-2 {
        -webkit-animation-delay: 1s;
        animation-delay: 1s;
    }
`;

const Navigation = styled.nav`   

    @media screen and (max-width: 667px) {

        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        a {
            text-decoration: none;
            color: #232323;
            transition: color 0.3s ease;
        }
        
        #menuToggle {
             display: block;
             position: relative;
             top: 20px;
             left: 20px;
             z-index: 1;
             -webkit-user-select: none;
             user-select: none;
        }
        
        #menuToggle input {
             display: block;
             width: 40px;
             height: 32px;
             position: absolute;
             top: -7px;
             left: -5px;
             cursor: pointer;
             opacity: 0;
             /* hide this */
             z-index: 2;
             /* and place it over the hamburger */
             -webkit-touch-callout: none;
        }
        
        #menuToggle span {
             display: block;
             width: 33px;
             height: 4px;
             margin-bottom: 5px;
             position: relative;
             background: #cdcdcd;
             border-radius: 3px;
             z-index: 1;
             transform-origin: 4px 0px;
             transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.55s ease;
        }
        
        #menuToggle span:first-child {
             transform-origin: 0% 0%;
        }
        
        #menuToggle span:nth-last-child(2) {
             transform-origin: 0% 100%;
        }
        
        #menuToggle input:checked~span {
             opacity: 1;
             transform: rotate(45deg) translate(-2px, -1px);
             background: #232323;
        }
        
        #menuToggle input:checked~span:nth-last-child(3) {
             opacity: 0;
             transform: rotate(0deg) scale(0.2, 0.2);
        }
        
        #menuToggle input:checked~span:nth-last-child(2) {
             transform: rotate(-45deg) translate(0, -1px);
        }
        
        #menu {
             position: absolute;
             width: 300px;
             margin: -100px 0 0 -20px;
             padding: 20px;
             padding-top: 125px;
             background: #ededed;
             list-style-type: none;
             -webkit-font-smoothing: antialiased;
             transform-origin: 0% 0%;
             transform: translate(-100%, 0);
             transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0);
             height: 100vh;
        }
        
        #menu li {
             padding: 10px 0;
             font-size: 22px;
        }
        
        #menuToggle input:checked~ul {
             transform: none;
        }
    }
    
    @media screen and (min-width: 668px) {
        border-bottom: 2px solid #444649;
        position: absolute;
        bottom: 0;
        left: 0;
        background: #fff;
        height: 50px;
        width: 100%;
        &.stick {
            position: fixed;
            z-index: 1;
            top: 0;
            left: 0;
        }
        #menuToggle {
            margin: 0 auto;
            padding: 0 20px;
            max-width: 1024px;
            input, span {
                display: none;
            }
            a {
                display: inline-block;
                text-transform: uppercase;
                width: 20%;
                padding: 16px 0;
                text-align: center;
                cursor: pointer;
            }
        }
    }
`;

export default class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            navPosition: undefined
        }
    }

    componentDidMount() {
        return window.addEventListener('scroll', debounce(this.handleScroll, 16));
    }

    componentWillUnmount() {
        return window.removeEventListener('scroll', debounce(this.handleScroll, 16));
    }

    handleScroll = () => {
        const div = document.getElementById("hero");
        const navPosition = div.getBoundingClientRect();
        return this.setState({ navPosition: navPosition.bottom })
    };

    render() {
        const { navigation } = this.props.resumeData;
        const isNavAtTop = this.state.navPosition <= 50;

        return (
            <div>
                <FullScreen
                    id="hero"
                >
                    <div className="hero">
                        <div className="header-container">
                            <div className="text">
                                <h1 className="animate"><Color color="#fff">Kate</Color></h1>
                                <h1 className="animate delay-1"><Color color="#fff"> Hunt</Color></h1>
                            </div>
                            <div className="text">
                                <h1 className="animate delay-2">Front End Developer</h1>
                            </div>
                        </div>
                        <div className="stars">
                            <div className="small"/>
                            <div className="medium"/>
                            <div className="big"/>
                        </div>
                    </div>
                </FullScreen>
                <Navigation
                    className={(isNavAtTop) ? 'stick' : ''}
                >
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <span/>
                        <span/>
                        <span/>
                        <ul id="menu">
                            {
                                navigation && navigation.map((item, i)=>{
                                    return(
                                        <a key={`#${item}`} href={"#" + item}><li>{item}</li></a>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </Navigation>
            </div>
        );
    }
}