import React, { Component } from 'react';
import styled from 'styled-components';
import {Section, ColumnHalf} from './Shared';
import kate from '../img/katehunt.png';

const AboutSection = styled(ColumnHalf)`
    align-items: flex-end;
    .left {
        margin-bottom: 10vh;
    }
    div {
        padding-right: 10px;
    }

    @media screen and (max-width: 667px) {
        display: block;

        div {
            padding: 0;
        }
        .right {
             text-align: right;   
        }
    }
`;

export default class About extends Component {
    render() {
        const { about } = this.props.resumeData;

        return (
            <Section
                name={"About"}
                color={'#f5f5f5'}
                padding={"30px 0 0;"}
            >
                <div>
                    <AboutSection>
                        <div className={'left'}>
                            {
                                about && about.map((about, i)=>{
                                    return(
                                        <p key={about + i}>{about}</p>
                                    )
                                })
                            }
                        </div>
                        <div className={'right'}>
                            <img style={{maxHeight: '250px'}} src={kate} alt="Kate Hunt portrait" />
                        </div>
                    </AboutSection>
                </div>
            </Section>
        );
    }
}