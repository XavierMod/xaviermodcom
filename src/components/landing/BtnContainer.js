import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../../assets/hi-im-xavier-mod.svg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import MainButton from '../library/MainButton';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 


const Btns = styled.div`
    /* border: 1px solid grey; */

    button {
        margin-top: 30px;
    }
`;


const BtnContainer = () =>  {   
    return (
            <Btns>
                <Link to="/projects"><MainButton emoji="💻" type="primary" text="Explore work" /></Link>
                <Link to="/profile"><MainButton emoji="👨🏻‍💻" text="View Profile" /></Link>
            </Btns>
    );
}

export default BtnContainer;