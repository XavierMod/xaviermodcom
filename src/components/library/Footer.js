import React, { Component } from 'react';
import styled from 'styled-components';

import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 


const FooterWrapper = styled.div`
    padding: 20px;
`;

const A = styled.a`
    font-family: 'Reenie Beanie', cursive;
    color: black;
    font-size: 25px;
`;


const Footer = ( props ) =>  {
    
    // Get full year
    var date = new Date();

    return (
        <FooterWrapper>
            <p>{date.getFullYear()}. Designed and built by <A href="#">@xaviermod</A> with React.js ⚛️💜. Hosted by <A href="#">GitHub</A> </p>
        </FooterWrapper>
    );
}

export default Footer;