import React, { Component } from 'react';
import {Section, InView} from './Shared';
import styled from 'styled-components';

const SkillsContainer = styled.div`
	background: white;
	margin-top: -117px;
	box-shadow: 1px 1px 5px #ccc;
	border-radius: 10px;
	border: 1px solid #f5f5f5;

	p {
		
	}

	.skill-type {
		width: 50%;
		display: inline-block;
		text-align: center;
		vertical-align: top;

		h3 {
			font-family: 'Lobster',cursive;
			font-size: 30px;
		}
		h4 {
			color: #2b5876;
			font-weight: bold;
			margin-bottom: 15px;

		}
	}
	.skill-subtype {
		display: block;
		margin: 7vh 0;
		opacity: 0

		&.height {
			opacity: 1;
			transition: opacity .75s ease-in;
		}
	}
`; 

const Test = ({
	index,
	skill
}) => {
	return(
		<InView id={`skill-type-${index}`} animate={'height'} className={"skill-subtype"}>
			<h4>{skill.title}</h4>
			{skill.content.map((content, i)=>{
				return (
					<p>{content}</p>
				)
			})}
		</InView>
	)
}

export default class Skills extends Component {

    render() {
    	const { skills } = this.props.resumeData;

        return (
            <Section
                name={"Skills"}
                color={'#fff'}
                noHeader
            >
	        	<SkillsContainer>
	        		<div className={"skill-type"}>
	            		{skills ?
	            			skills.left.map((left, i)=>{
	            				return(
	            					<Test index={i} skill={left} />
	            				);

	            			})
	            		: null}
	        		</div>
	        		<div className={"skill-type"}>
	            		{skills ?
	            			skills.right.map((right, i)=>{
	            				return(
	            					<Test index={i} skill={right} />
	            				);

	            			})
	            		: null}
	        		</div>
	        	</SkillsContainer>
            </Section>
        );
    }
}