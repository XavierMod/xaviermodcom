import React from 'react';
import styled from 'styled-components';

const P = styled.p`
    margin: 20px auto;
`;

const Paragraph = ( props ) => {
    return (
        <P>{props.p}</P>
    );
}

export default Paragraph;