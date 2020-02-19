import React, { Component } from 'react';
import styled from 'styled-components';

const TextBlockContainer = styled.div`
    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;
`;

const P = styled.p`
    font-size: 1.2rem;
`;

const TextBlock = ( props ) =>  {   
    return (
        <TextBlockContainer>
            <P>{props.text}</P>
        </TextBlockContainer>
    );
}

export default TextBlock;