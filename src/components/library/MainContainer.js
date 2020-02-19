import React from 'react';
import styled from 'styled-components';

const MainContainerWrapper = styled.div`
    display: block;
    max-width: 1200px;
    margin: auto;
    z-index: 200;
`;

const MainContainer = ( props ) => {
    return (
        <MainContainerWrapper>
            {props.children}
        </MainContainerWrapper>
    )
}

export default MainContainer;