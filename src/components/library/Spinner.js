import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
    text-align: center;
    height: 100vh;
    margin: 320px auto; 
`;

const spinner = () => {
    return (
        <SpinnerWrapper>
            <Spinner color="primary" />        
        </SpinnerWrapper>
    )
    
};

export default spinner;