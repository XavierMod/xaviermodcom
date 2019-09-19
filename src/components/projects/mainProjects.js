import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import LogoMain from '../landing/LogoMain';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

import NameFull from '../landing/NameFull';
import SocialBar from '../landing/SocialBar';
import Footer from '../library/Footer';
import GalleryItem from './GalleryItem';
import ProjectTemplate from './projectTemplate';

import MyWorkTitle from './myworkTitle';

import test from '../../projectsData/test';

import WorkingOnThat from '../../components/WorkingOnThat';

const ProjectsContainer = styled.div`

`;

const GalleryProjects = styled.div`
    text-align: center;
    /* padding: 30px; */
    /* border: 1px solid red; */

`;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        // Sets body to white
        document.querySelector('body').style.backgroundColor='white';
        document.querySelector('html').style.backgroundColor='white';


        return (
            // <ProjectsContainer>
            //     <Link to="/"><LogoMain type="black" /></Link>

            //     <SocialBar type="black" />
            //     <MyWorkTitle />
            //     <GalleryProjects>
            //         {test.map((obj, number) => {
            //             console.log(obj.meta.route)
            //             return (
            //                 <GalleryItem key={obj.meta.key} imgUrl={obj.meta.photos[0].url} />
            //             )
            //         })}
            //     </GalleryProjects>

            //     <Footer /> 
            // </ProjectsContainer>
            <WorkingOnThat />
        );
    }
};

export default Projects;