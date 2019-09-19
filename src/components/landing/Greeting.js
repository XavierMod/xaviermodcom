import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../../assets/hi-im-xavier-mod.svg';

const GreetingMain = styled.div`
    h1 {
        display: inline-block;
        overflow: hidden;
        animation: typing 2s steps(20), blink .75s step-end infinite;
        white-space: nowrap;
        font-size: 30px;
        font-weight: 700;
        border-right: 3px solid #3399ff;
    }

    img {
        width: 300px;
    }
`;


const Greeting = () =>  {   
    return (
        <GreetingMain>
            <h1>Hi. I'm Xavier Mod</h1>
        </GreetingMain>
    );
}

export default Greeting;