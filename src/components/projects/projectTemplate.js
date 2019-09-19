import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

const ProjectTemplateWrapper = styled.div`
    background-color: red;
`;

class ProjectTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {} 
    }
    
    render() {

        console.log(this.props);
        
        return (
            <ProjectTemplateWrapper>
                {/* <p>{this.props.props.meta.project_name}</p> */}
                <p>tesdaasadsddasdasdasdasdst</p>
            </ProjectTemplateWrapper>
        )
    }

};

export default ProjectTemplate;