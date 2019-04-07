import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, ColumnHalf, ColumnThird, ColumnTwoThirds} from './Shared';
import kate from '../img/katehunt.png';

const AboutSection = styled(Section)`
    padding-bottom: 0;
    background: red;
`;

export default class About extends Component {
    render() {
        return (
            <AboutSection
                name={"About"}
                color={"#fff"}
                padding={"30px 0 0 0;"}
            >
                <div>
                    <ColumnTwoThirds no-pad no-marg>
                        <div>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        </div>
                        <img style={{maxHeight: '200px'}} src={kate} alt="Kate Hunt portrait" />
                    </ColumnTwoThirds>
                </div>
            </AboutSection>
        );
    }
}