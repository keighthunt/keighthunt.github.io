import React, { Component } from 'react';
import { Section } from './Shared';
import Modal from './Shared';

export default class Portfolio extends Component {
    render() {
        const { portfolio } = this.props.resumeData;

        return (
            <Section
                name={"Portfolio"}
            >
                <h1>Work</h1>
                {
                    portfolio && portfolio.map((item, i)=>{
                        return(
                            <Modal key={i + item} data={item} />
                        )
                    })
                }
            </Section>
        );
    }
}