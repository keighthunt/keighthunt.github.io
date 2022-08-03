import React, { Component } from 'react';
import {Section, InView} from './Shared';
import styled from 'styled-components';

const SkillsContainer = styled.div`
	background: white;
	box-shadow: 1px 1px 5px #ccc;
	border-radius: 10px;
	border: 1px solid #f5f5f5;
	padding: 3vh 0;

	.skill-type {
		width: 50%;
		display: inline-block;
		text-align: center;
		vertical-align: top;
		@media screen and (max-width: 667px) {
			width: 100%;
		}

		h3 {
			color: #2b5876;
			font-weight: bold;
			margin: 3vh;
    		line-height: 1.15em;
		}
	}
	.skill-subtype {
		display: block;
		padding: 1vh 0;
		opacity: 0

		&.height {
			opacity: 1;
			transition: opacity .75s ease-in;
		}
	}
`; 

const SkillType = ({
	index,
	skill
}) => {
	return(
		<InView id={`skill-type-${index}`} animate={'height'} className={"skill-subtype"}>
			<h3>{skill.title}</h3>
			{skill.content.map((content, i)=>{
				return (
					<p key={content + i}>{content}</p>
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
                padding={'0 0 30px;'}
            >
	        	<SkillsContainer>
	        		<div className={"skill-type"}>
	            		{skills ?
	            			skills.left.map((left, i)=>{
	            				return(
	            					<SkillType key={left + i} index={i} skill={left} />
	            				);

	            			})
	            		: null}
	        		</div>
	        		<div className={"skill-type"}>
	            		{skills ?
	            			skills.right.map((right, i)=>{
	            				return(
	            					<SkillType key={right + i} index={i} skill={right} />
	            				);

	            			})
	            		: null}
	        		</div>
	        	</SkillsContainer>
            </Section>
        );
    }
}