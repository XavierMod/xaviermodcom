import React, { Component } from 'react';
import styled from 'styled-components';

import LinkedinLogo from '../../assets/linkedin-logo.svg';
import GmailLogo from '../../assets/gmail-logo.svg';
import GithubLogo from '../../assets/github.svg';
import MediumLogo from '../../assets/medium.svg';

const SocialBarContainer = styled.div`
    /* border: 1px solid red; */
    display: inline-block;
    padding: 25px;
    position: fixed;
    right: 0;

    animation: moveInRight 1.5s ease-out;
    animation-fill-mode: backwards;

    ul {
        list-style-type: none;
    }

    li > a > img {
        padding: 10px;
        width: 40px;
        transition: all ease-in-out 0.15s;


        &:hover {
            width: 55px;
            transition: all ease-in-out 0.15s;
        }
    }

`;


const SocialBar = ( props ) =>  {
    
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
        <SocialBarContainer>
            <ul>
                <li><a href="https://www.linkedin.com/in/xavier-mod-22a25964/" target="_blank"><img style={chooseLogoColor()}src={LinkedinLogo} alt="Linkedin Logo" /></a></li>
                <li><a href="https://github.com/XavierMod" target="_blank"><img style={chooseLogoColor()} src={GithubLogo} alt="Github Logo" /></a></li>
                <li><a href="mailto:hi.xavier.mod@gmail.com?subject=Hi Xavier!" target="_blank"><img style={chooseLogoColor()} src={GmailLogo} alt="Gmail Logo" /></a></li>
                <li><a href="https://medium.com/@xavier.mod" target="_blank"><img style={chooseLogoColor()} src={MediumLogo} alt="Medium Logo" /></a></li>
            </ul>
        </SocialBarContainer>
    );
}

export default SocialBar;