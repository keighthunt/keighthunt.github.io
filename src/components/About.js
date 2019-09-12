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
        const { about } = this.props.resumeData;

        return (
            <AboutSection
                name={"About"}
                color={'#f5f5f5'}
                padding={"30px 0 0 0;"}
            >
                <div>
                    <ColumnHalf>
                        <div>
                            {
                                about && about.map((about, i)=>{
                                    return(
                                        <p key={about + i}>{about}</p>
                                    )
                                })
                            }
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