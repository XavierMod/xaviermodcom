import React, { Component } from 'react';
import styled from 'styled-components';

import { largerThan, smallerThan } from './../../../helpers/mediaQueries'; 


const BlockW = styled.div`
    display: inline-block;
    width: 290px;
    background-color: white;
    margin: 25px 50px;
    padding: 30px;
    color: black;
    text-align: center;
    box-shadow: 1px 1px 30px rgba(0, 0, 0, 0.05);
    position: relative;

    ${smallerThan.mobile`
        width: 90%;
        display: block;
        margin: 25px auto;
    `};

`;

const Icon = styled.p`
    font-size: 40px;
    text-align: center;

`;

const Title = styled.h1`
    font-size: 17px;
    font-weight: 700;
    margin-bottom: 10px;
`;

const Body = styled.p`
    font-size: 16px;

`;


const Block = ( props ) =>  {
        const ButtonContainer = styled.button`
        padding: 14px;
        font-weight: 700;
        font-size: 13px;
        position: absolute;
        bottom: 20px;
        left: 23px;

        ${smallerThan.mobile`
        position: static;

    `};
       
        text-align: center;
        
        border: 1px solid #3399ff;
        background-color: white;
        border-radius: 5px;
        width: 85%;
        margin-top: 15px;

        a {
            text-decoration: none !important;
            color: #3399ff;
        }

        a:hover {
            color: #3399ff !important;
        }

        &:hover {
            color: white;
            cursor: pointer;
            border-radius: 40px;
            transition: all ease .24s;
        }

    `;

    return (

        <a href={props.href} target="_blank">
            <BlockW>
                <Icon>{props.icon}</Icon>
                <Title>{props.title}</Title>
                <Body>{props.body}</Body>
            </BlockW>
        </a>
    );
}

export default Block;