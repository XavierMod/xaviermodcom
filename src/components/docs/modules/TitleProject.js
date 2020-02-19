import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: red;
`;

const TitleProject = ( props ) => {
    return (
        <React.Fragment>
            <H1>{props.title}</H1>
            <hr />
        </React.Fragment>
    );
}

export default TitleProject;