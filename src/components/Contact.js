import React, { Component } from 'react';
import styled from 'styled-components';
import {Section} from './Shared';
import Pdf from '../assets/Kate_Hunt_CV.pdf';
import linkedIn from '../assets/linkedin.svg';
import github from '../assets/github.svg';
import cv from '../assets/resume.svg';

const IconContainer = styled.div`
	text-align: center;

	p {
		margin-top: 5vh;
		font-size: 10px;
	}
`;

const ContactIcon = styled.a`
	display: inline-block;
	width: 40px;
	margin: 0 5px;
`;

export default class Contact extends Component {
    render() {
        return (
            <Section
                color={'#f5f5f5'}
            >
            	<IconContainer>
	            	<ContactIcon target="_blank" href="http://www.linkedin.com/in/keighthunt">
	            		<img src={linkedIn} />
	        		</ContactIcon>
	            	<ContactIcon target="_blank" href="https://github.com/keighthunt">
	            		<img src={github} />
	        		</ContactIcon>
	        		<ContactIcon href={Pdf} target="_blank">
	            		<img src={cv} />
	        		</ContactIcon>
	        		<p>Kate Hunt &#9400;</p>
        		</IconContainer>
            </Section>
        );
    }
}