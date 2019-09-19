import React, { Component } from 'react';
import styled from 'styled-components';
import Image from '../../assets/name-full.png';
import Image2 from '../../assets/profile.svg';


const NameFull = ( props ) =>  {   

    const textOrigin = () => {
        var textSource;
        if (props.type === 'landing') {
            textSource = Image;
        } else if (props.type === 'profile') {
            textSource = Image2;
        }
        return textSource;
    }

    const NameFullContainer = styled.div`

    img {
        width: 110%;
    }
`;

    const LandingStyle = {
        'position': 'fixed',
        'left': '-200px',
        'bottom': '-30px',
        'pointer-events': 'none',
        'display': 'inline-block',
        'animation': 'moveInBottom 1s ease-out 0.5s',
        'animation-fill-mode': 'backwards',
    }

    const ProfileStyle = {
        'position': 'relative',
        'left': '0',
        'bottom': '-20px',
        'border': '1px solid red',
        'display': 'block',
        'margin': 'auto',
        'width': '500px', 
        'pointer-events': 'none',
        'animation': 'moveInBottom 1s ease-out 0.5s',
        'animation-fill-mode': 'backwards'
    }

    return (
        <NameFullContainer style={props.type === 'landing' ? LandingStyle : ProfileStyle}>
            <img src={textOrigin()} alt="Xavier Mod Logo" />
        </NameFullContainer>
    );
}

export default NameFull;