import React, { Component } from 'react';
import { Section, InView } from './Shared';
import styled from 'styled-components';
import Modal from 'react-modal';

const Item = styled.div`
    width: 30%;
    margin: 0 3% 3% 0;
    display: inline-block;
    background: grey;
    border: 1px solid black;
    height: 250px;
    opacity: 0;
    background: ${props => `url(${props.background}) no-repeat top left`};
    background-size: auto 100%;
    cursor: pointer;

    @media screen and (max-width: 667px) {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 300px;
        width: 100%;
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
                            <InView id={'portfolio' + i} animate={'flipInX'}>
                                <Item
                                    background={item.main_image}
                                    onClick={e => this.clickHandler(e, i)}
                                >
                                </Item>
                                <Modal
                                    isOpen={this.state.activeModal === i}
                                    onRequestClose={this.hideModal}
                                >
                                    <p>{item.name}</p>
                                    <a href={item.url} target="_blank">{item.website}</a>

                                    {item.other ? 
                                        <div>
                                            <p>Other work includes:</p>
                                            <ul>
                                                {item.other.map((item, i)=>{
                                                     return(
                                                         <li>{item}</li>
                                                     )
                                                });
                                               
                                            </ul>
                                        </div>
                                        : null
                                    }
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