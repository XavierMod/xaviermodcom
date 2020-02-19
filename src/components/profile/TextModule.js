import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

import Popover from '../library/Poppover';


const TextModuleContainer = styled.div`
    display: block;
    color: white;
    margin: 30px 10px;
    height: 100%;
    padding: 30px;

    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;

    ${smallerThan.mobile`

    `};
`;

const H1 = styled.h1`
	position: relative;
	font-size: 2rem;
	animation-name: text;
    color: #FFF;
    display: inline-block;
    margin-bottom: 25px;

    &::after{
        animation-delay: 0;
	        animation-delay: var(--animation-delay, 1s);
	        animation-iteration-count: 1;
	        animation-iteration-count: var(--iterations, 1);
	        animation-duration: 800ms;
	        animation-duration: var(--duration, 800ms);
	        animation-fill-mode: both;
	        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);

        content: "";
		position: absolute;
		z-index: 999;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f2f98b;
	        transform: scaleX(0);
		pointer-events: none;
	        animation-name: revealer;
    }

    
`;

const P = styled.p`
    margin-bottom: 15px;
    font-size: 1.1rem;
`;


const TextModule = ( props ) =>  {   

    return (
        <TextModuleContainer>
            <H1>{props.title}</H1>
            <P>{props.body}</P>
            <P>{props.body2}</P>
            <P>{props.body3}</P>
        </TextModuleContainer>
    );
}

export default TextModule;