import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

import SVG from '../../assets/mywork.svg';

const IMG = styled.img`
    display: block;
    margin: auto;
    padding-top: 15px;
    pointer-events: none;
    animation: moveInTop 1.1s ease-out;
    animation-fill-mode: backwards;

    ${smallerThan.mobile`
        width: 90%;
        padding-top: 140px;
    `};

`;



const MyWorkTitle = () => {

    return (
        <React.Fragment>
            <IMG src={SVG} alt="my work title" />
        </React.Fragment>
    )
};

export default MyWorkTitle;