import React, {Component} from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
    padding: 30px 0;
    background: ${props => (props.color ? props.color : '')};
    h1 {
        font-size: 30px;
        text-align: center;
        text-transform: uppercase;
    }
    .wrapper {
        margin: 0 auto;
        padding: 0 20px;
        max-width: 1024px;
    }
`;

const Section = ({
    children,
    name,
    color
}) => {
    return (
        <SectionContainer color={color} id={name}>
            <div className="wrapper">
                {children}
            </div>
        </SectionContainer>
    );
};

export default class Modal extends Component {
    render() {
        const data = this.props.data;
        return (
            <div

            >
                <h3>{data.name}</h3>
            </div>
        );
    }
}

export {Section}