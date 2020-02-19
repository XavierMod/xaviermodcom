import React from 'react';
import styled from 'styled-components';
import ImageIcon from '../../../assets/image-outline.svg';

const IMG = styled.img`
    width: 100%;
    margin: 20px;
`;

const SmallIcon = styled.img`
    width: 20px;
`;

const FooterImage = styled.p`
    font-size: 13px;
    margin-left: 20px;
    padding: 10px;
    background-color: #f5fbff;
    color: #0c8fed;
    border: 1px solid red;

`;

const Image = ( props ) => {
    return (
        <React.Fragment>
            <IMG src={props.source} />

            <FooterImage> <SmallIcon src={ImageIcon} />TestTestTestTestTestTestTestTest</FooterImage>
        </React.Fragment>
    );
}

export default Image;