import React, { Component } from 'react';
import styled from 'styled-components';
import MeImage from '../../assets/me.png'

const MainImageContainer = styled.div`
    animation: moveInRight 1s ease-out 0.5s;
    animation-fill-mode: backwards;
    z-index: 1;
    pointer-events: none;

`;



const MainImage = ( props ) =>  {   

    return (
        <MainImageContainer>
            <img width={props.width} src={MeImage} alt="Xavier Mod Logo" />
        </MainImageContainer>
    );
}

export default MainImage;