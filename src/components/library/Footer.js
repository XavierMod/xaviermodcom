import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries';

const FooterWrapper = styled.div`
    background-color: black;
    display: flex;

    ${smallerThan.mobile`
        display: block;
    `};

    p {
        padding: 15px;
        color: white;
        text-align: left;
        font-size: 14px;
        display: inline-block;
        flex: 90%;
    }

    a {
        flex: 10%;
        margin: 10px;
        margin-right: 30px;
        padding: 10px;
        color: white;
        height: 40px;
        border: 1px solid white;
        text-align: center;
        border-radius: 0;
        text-decoration: none !important;
        font-size: 12px;
        border-radius: 5px;
        transition: all ease 0.3s;

        ${smallerThan.mobile`
        display: block;
        margin: auto;
        width: 90%;

    `};
    }

    a:hover {
        background-color: white;
        color: black;
    }
`;

const Footer = ( props ) =>  {
    
    // Get full year
    var date = new Date();

    return (

        <FooterWrapper>
            <p><strong>{date.getFullYear()}.</strong> Designed and built by Xavier Mod with React and Firebase. Hosted on GitHub and Netlify.</p>
            <a href="https://github.com/XavierMod/xaviermodcom" target="_blank">Repo</a>
        </FooterWrapper>
    );
}

export default Footer;