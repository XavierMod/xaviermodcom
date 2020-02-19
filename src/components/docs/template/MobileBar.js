import React from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../../helpers/mediaQueries'; 

import MainLogo from '../../../assets/xm-main.svg';

const MobileBar = styled.div`
    ${largerThan.mobile`
        display: none;

    `};
`;

const IMG = styled.img`
    position: fixed;
    right: 20px;
    top: 20px;
    fill: white;
    filter: invert(100%);
`;

const NavBarMobile = () => {
    return (
        <MobileBar>
        <div class="container">

            <input id="toggle" type="checkbox" />


            <label class="toggle-container" for="toggle">
            
            <span class="button button-toggle"></span>
            </label>

            <nav class="nav">
                <a class="nav-item" href="">Dashboard</a>
                <a class="nav-item" href="">History</a>
                <a class="nav-item" href="">Statistics</a>
                <a class="nav-item" href="">Settings</a>
            </nav>
            <IMG src={MainLogo} />
        </div>
        </MobileBar>
    );
}

export default NavBarMobile;

