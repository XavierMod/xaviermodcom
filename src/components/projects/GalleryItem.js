import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const GalleryItem = ( props ) => {

    const GalleryItemWrapper = styled.div`
    width: 100%;
    max-width: 320px;
    height: 220px;
    background: url(${props.imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    cursor: pointer;

    display: inline-block;
    margin: 20px;

    animation: moveInLeft 1.5s ease-out;
    animation-fill-mode: backwards;

    transition: all 0.45s ease;

    ${smallerThan.mobile`
        width: 90%;
        margin: 20px 5px;
    `};

    &:after {
        position: absolute;
        content: '';
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 1);
        opacity: 0;
    }

    &:hover:after, #test {
        display: block;
        cursor: pointer;
        opacity: 0.5;
        box-shadow: 1px 1px 20px #d7d7d7;
        transition: all 0.45s ease;
    }

    `;

    return (
        <GalleryItemWrapper></GalleryItemWrapper>
    )
};

export default GalleryItem;