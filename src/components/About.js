import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, ColumnHalf} from './Shared';
import kate from '../img/katehunt.png';

const AboutSection = styled(Section)`
    padding-bottom: 0;
    background: red;
    
    p + p {
        margin-top: 10px;
    }
`;

export default class About extends Component {
    render() {
        return (
            <AboutSection
                name={"About"}
                color={'#f5f5f5'}
                padding={"30px 0 0 0;"}
            >
                <div>
                    <ColumnHalf>
                        <div>
                            <p>I'm a London, UK based Front‑End Developer with 6+ years of professional experience, with a passion for UX design. I am comfortable in coding in mobile environments and responsive design, all with keeping in mind W3C standards, SEO and capabilities of different web browsers and operating systems.</p>
                            <p>In the past year, I have embarked on a new role as Lead Developer at my current place of employment building my management style</p>
                        </div>
                        <div>
                            <img style={{maxHeight: '200px'}} src={kate} alt="Kate Hunt portrait" />
                        </div>
                    </ColumnHalf>
                </div>
            </AboutSection>
        );
    }
}