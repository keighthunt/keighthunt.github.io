import React, { Component } from 'react';
import {Section} from './Shared';

export default class About extends Component {
    render() {
        return (
            <Section
                name={"About"}
            >
                <h1>About</h1>
                <div>

                </div>
                <div>
                    <img src="/src/img/katehunt.png" alt="Kate Hunt portrait" />
                </div>
            </Section>
        );
    }
}