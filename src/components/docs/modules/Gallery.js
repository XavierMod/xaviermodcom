import React from 'react';
import styled from 'styled-components';

const GalleryWrapper = styled.div`
    text-align: center;
    margin: 20px auto;

    img {
        display: inline-block;
        width: 400px;
        margin: 20px;
        max-width: 100%;
    }

`;

const Gallery = ( props ) => {
    return (
        <GalleryWrapper>
            <img src={props.src1} />
            <img src={props.src2} />
            <img src={props.src3} />
            <img src={props.src4} />
        </GalleryWrapper>
    );
}

export default Gallery;