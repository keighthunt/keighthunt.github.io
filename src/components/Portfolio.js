import React, { Component } from 'react';
import { Section, InView } from './Shared';
import Modal from './Shared';
import styled from 'styled-components';

const Item = styled.div`
    width: 33%;
    display: inline-block;
    background: grey;
    border: 1px solid black;
    height: 300px;
    opacity: 0;
`;

export default class Portfolio extends Component {

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
                                <Item>
                                    {/*<button onClick={this.onOpenModal}>Open modal</button>*/}
                                </Item>
                            </InView>
                        )
                    })
                }
            </Section>
        );
    }
}