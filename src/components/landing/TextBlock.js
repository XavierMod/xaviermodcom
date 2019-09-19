import React, { Component } from 'react';
import styled from 'styled-components';

const TextBlockContainer = styled.div`
    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;
`;


const TextBlock = ( props ) =>  {   
    return (
        <TextBlockContainer>
            <p>{props.text}</p>
        </TextBlockContainer>
    );
}

export default TextBlock;