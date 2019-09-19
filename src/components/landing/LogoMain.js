import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/xm-main.svg';

const LogoMain = styled.div`
    /* border: 1px solid blue; */
    display: inline-block;
    position: fixed;
    left: 0;
    padding: 30px;

    img {
        width: 50px;
    }
`;


const LogoMainContainer = ( props ) =>  {   

    const chooseLogoColor = () => {
        var style;
        if (props.type === 'white') {
            style = {
                'filter': 'invert(100%)'
            }
        } else if (props.type === 'black') {
            style = {
                'filter': 'invert(0%)'
            }
        }

        return style;
    }

    return (
        <LogoMain>
            <img style={chooseLogoColor()} src={Logo} alt="Xavier Mod Logo" />
        </LogoMain>
    );
}

export default LogoMainContainer;