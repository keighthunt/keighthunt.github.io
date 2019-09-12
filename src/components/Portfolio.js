import React, { Component } from 'react';
import { Section, InView } from './Shared';
import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  content : {
      width : '680px',
      left: "50%",
      marginLeft: "-360px"
  }
};

const Item = styled.div`
    width: calc(32% - 2px);
    margin: 0 0 2% 0;
    display: inline-block;
    background: grey;
    border: 1px solid black;
    height: 250px;
    opacity: 0;
    background: ${props => `url(${props.background}) no-repeat top left`};
    background-size: auto 100%;
    cursor: pointer;

    &.margin {
        margin-left: 2%;
    }

    @media screen and (max-width: 667px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        width: 100%;
    }
`;

const ModalContent = styled.div`
    margin: 0 auto;
    position: relative;
    span {
        position: absolute;
        cursor: pointer;
        font-family: 'Open Sans', sans-serif;
        right: 0;
        top: 0;
    }
    h2 {
        text-align: center;
        font-size: 40px;
        font-size: 5vh
        border-bottom: 1px solid #444649;
        padding: 3vh 0;
        margin-bottom: 3vh
    }
    a {
        text-align: center;   
        color: #2b5876;
        display: block;
        margin-bottom: 2vh
    }
    ul {
        list-style-type: disc;
        margin-left: 20px;
        margin-bottom: 2vh
    }
    p {
        margin-bottom: 2vh;
    }
`;

Modal.setAppElement('#modal')

export default class Portfolio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeModal: null
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }


    render() {
        const { portfolio } = this.props.resumeData;

        return (
            <Section
                name={"Portfolio"}
                isVisible={this.onScroll}
            >
                {
                    portfolio && portfolio.map((item, i)=>{
                        return(
                            <InView id={'portfolio' + i} key={item + i} animate={'flipInX'}>
                                <Item
                                    background={item.main_image}
                                    onClick={e => this.clickHandler(e, i)}
                                    className={i % 3 ? 'margin' : ''}
                                >
                                </Item>
                                <Modal
                                    isOpen={this.state.activeModal === i}
                                    onRequestClose={this.hideModal}
                                    style={customStyles}
                                >
                                    <ModalContent>
                                        <span onClick={this.hideModal}>x</span>
                                        <h2>{item.name}</h2>
                                        <a href={item.url} target="_blank">{item.website}</a>

                                        {
                                            item.content && item.content.map((content, i)=>{
                                                return(
                                                    <p key={i + content}>{content}</p>
                                                )
                                            })
                                        }

                                        {item.other ? 
                                            <div>
                                                <p>Other work includes:</p>
                                                <ul>
                                                {
                                                    item.other.map((other, i)=>{
                                                        return(
                                                            <li key={i + other}>{other}</li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </div>
                                            : null
                                        }
                                        {item.technology ? 
                                            <div>
                                                <p>Technology:</p>
                                                <ul>
                                                {
                                                    item.technology.map((tech, i)=>{
                                                        return(
                                                            <li key={i + tech}>{tech}</li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </div>
                                            : null
                                        }
                                    </ModalContent>
                                </Modal>
                            </InView>
                        )
                    })
                }
            </Section>
        );
    }

    clickHandler(e, index) {
        this.setState({ activeModal: index })
    }

    hideModal() {
        this.setState({ activeModal: null })
    }


}