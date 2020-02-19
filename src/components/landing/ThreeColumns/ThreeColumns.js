import React, { Component } from 'react';
import styled from 'styled-components';

import { largerThan, smallerThan } from './../../../helpers/mediaQueries'; 

import Block from './Block';

const ThreeColumnsW = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 150px;
    flex-wrap: wrap;
`;

const ThreeColumns = ( props ) =>  {

    return (

        <ThreeColumnsW>
            <Block 
                icon="💻"
                title="Junior Front End Dev"
                body="Professional experience in e-commerce projects (Shopify - Liquid) and React."
                link="Github"
                href="https://github.com/XavierMod"
                 />
            <Block 
                icon="🦄"
                title="UI Designer +3 years"
                body="I've started as an intern and got hired by two different companies."
                link="LinkedIn"
                href="https://www.linkedin.com/in/xavier-mod-22a25964/"
                 />
        
            <Block 
                icon="🏛"
                title="University Student"
                body="Currently studying my 2nd BSc Digital Design year at Brunel University London."
                link="See university"
                href="https://www.brunel.ac.uk/study/undergraduate/Digital-Design-BSc"
                 />
        </ThreeColumnsW>
    );
}

export default ThreeColumns;