import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../../assets/hi-im-xavier-mod.svg';

import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const MainBtnContainer = ( props ) =>  {

    const ButtonContainer = styled.button`
    padding: 14px;
    font-weight: 700;
    font-size: 13px;
    text-decoration: none;
    text-align: center;
    transition: all .5s ease;
    margin-right: 30px;
    color: #3399ff;
    -webkit-clip-path: polygon(0% 0%, 100% 0, 100% 70%, 90% 100%, 0% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%);
    border: 1px solid #3399ff;
    background-color: white;
    border-radius: 5px;

    ${smallerThan.mobile`
        width: 100%;
        cursor: pointer;
        font-size: 15px;

  `};

    ${largerThan.mobile`
        &:hover {
        cursor: pointer;
        background-color: #3399ff;
        color: white;
        }
    

        &:after {
            content: "${props.emoji}";
        color: #e74c3c;
        font-family: FontAwesome;
        display: inline-block;
        position: relative;
        right: -55px;
        transition: all 0.2s ease;
        }

        &:hover:after {
        margin: 0px 10px;
        right: 0px;
        }
    `};
`;

    const buttonType = () => {
        var style;
        if (props.type === 'secondary') {
            style = {
                color: 'black'            
            }
        } else if (props.type === 'primary') {
            style = {
                backgroundColor: 'black',
                border: '1px solid black',
                color: 'white'
            }           
        } else if (props.type === 'white') {
            style = {
                backgroundColor: 'rgba(0, 0, 0, 0)',
                border: '1px solid white',
                color: 'white'
            } 
        } else if (props.type === 'blue') {
            style = {
                backgroundColor: '#3399ff',
                border: '1px solid #3399ff',
                color: 'white'
            } 
        }

        return style;
    }
    
    
    return (
        <ButtonContainer style={buttonType()}>{props.text}</ButtonContainer>
    );
}

export default MainBtnContainer;