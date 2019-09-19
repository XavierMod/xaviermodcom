import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import GalleryItem from './GalleryItem';
import Footer from '../library/Footer';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import ProjectTemplate from './projectTemplate';


const GalleryWrapper = styled.div`
    text-align: center;
    /* padding: 30px; */
    /* border: 1px solid red; */

`;

const GalleryProjects = ( props ) => {

    console.log(props.data)

    return (
        <Router>
                <GalleryWrapper>                    
                    
                </GalleryWrapper>
        </Router>
    )
};

export default GalleryProjects;