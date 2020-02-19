import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import LogoMain from '../landing/LogoMain';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SocialBar from '../landing/SocialBar';
import Footer from '../library/Footer';

import MainButton from '../library/MainButton';
import Slideshow from './Slideshow';
import { get } from 'https';
import GithubLogo from '../../assets/github.svg';

import Progress from '../library/Progress';

//Used as a tag, not a button
import { Button } from 'reactstrap';


const ProjectsContainer = styled.div`
    padding: none;
    height: 100vh;
    background-color: white;
`;

const SubContainer = styled.div`
    display: flex;

    ${smallerThan.mobile`
        display: block;
    `};

`;

const InfoProjectPreview = styled.div`

    flex: 3;

    background-color: white;
    height: 100vh;
    padding: 30px;
    padding-top: 60px;
    width: 400px;
    position: relative;

    ${smallerThan.mobile`
        width: 100%;
        height: auto;
    `};

    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;
`;

const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -2px;

`;

const Info = styled.p`
    font-size: 14px;
    margin-top: 40px;
    margin-bottom: 190px;

    ${smallerThan.mobile`
        margin-bottom: 50px;
    `};

`;

const Tags = styled.div`

    padding-top: 10px;

    span {
        background-color: #d8ecff;
        color: #0f7ff0; 
        margin-right: 10px;
        padding: 5px 10px;
        border-radius: 10px;
        font-size: 13px;
        font-weight: 700;
    }
`;

const Who = styled.p`
    margin-top: 70px;
`;

const ButtonContainer = styled.div`
    position: absolute;
    bottom: 50px;
    right: 0;


    ${smallerThan.mobile`
        position: static;
        display: block;
    `};

`;

const MainPics = styled.div`
    flex: 7;
    /* Next property fixes a bug */
    width: 100px;
    margin: auto;

    ${smallerThan.mobile`
        width: 100%;
    `};
`;

const GithubLink = styled.div`
    img {
        width: 20px;
    }

    ${smallerThan.mobile`
        display: block;
        padding: 20px;
        text-align: center;
    `};

`;

const BtnContainer = styled.div`
    position: absolute;
    bottom: 50px;
    left: 40px;
    z-index: 2000;

    animation: moveInLeft 1.5s ease-out;
    animation-fill-mode: backwards;

    ${smallerThan.mobile`
        position: static;
        margin: 30px;
        margin-top: 0;

    `};
`;


class ProjectsTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const generateLinkBtn = (getProps) => {
            console.log(getProps.url);
            // first if: if the url matches in the list // and // it's not in the last position
            if (getProps.url === getProps.allUrls[getProps.indUrl] && getProps.allUrls[getProps.indUrl] !== getProps.allUrls[getProps.allUrls.length - 1]) {
                return getProps.allUrls[getProps.indUrl + 1]
                // If it's in the last position... return the first one.
            } else if (getProps.allUrls[getProps.indUrl] === getProps.allUrls[getProps.allUrls.length - 1]) {
                return getProps.allUrls[0];
            }
        }

        const addGithub = (getProps) => {
            if (getProps.data.addGithub.activate == true) {
                return <GithubLink>
                    <a href={getProps.data.addGithub.link} target="_blank"><img src={GithubLogo} /></a>
                </GithubLink>
            } else {
                return null;
            }
        }

        console.log(this.props)

        return (
            <ProjectsContainer>
                <Link to="/"><LogoMain type="black" /></Link>

                <SocialBar type="black" />
                
                <SubContainer>
                    <MainPics>
                        <Slideshow {...this.props} />
                    </MainPics>

                    <InfoProjectPreview>
                    
                        <Title>{this.props.title}</Title>
                        <Progress 
                            color2="info" 
                            value2={this.props.data.progressBar.design.value} 
                            content2={this.props.data.progressBar.design.label}
                            color="success" 
                            value={this.props.data.progressBar.development.value}  
                            content={this.props.data.progressBar.development.label} />

                        {this.props.data.demo && this.props.data.demo ? <Button style={{marginTop: '20px'}}href={this.props.data.demo} color="link" target="_blank">See Demo</Button> : null}    

                        <Who> <strong>Company: </strong>{this.props.data.company}</Who>
                        
                        {this.props.data.standOut && this.props.data.standOut ? <Button color="primary">{this.props.data.standOut.label}</Button> : null}

                        <Info>{this.props.data.description}</Info>
                        {addGithub(this.props)}
                        <ButtonContainer>
                        <Link to={{
                                //If we wanted to append a new dynamic route:
                                pathname: this.props.match.url + "/" + generateLinkBtn(this.props),
                            }}><MainButton emoji="💻" type="primary" text="Go to next project" /></Link>
                        </ButtonContainer>

                    </InfoProjectPreview>
                </SubContainer>
                <BtnContainer>
                            <Link to="/profile"><MainButton emoji="👨🏻‍💻" type="blue" text="My profile" /></Link>
                        </BtnContainer>
                <Footer /> 
            </ProjectsContainer>
        );
    }
};

export default ProjectsTemplate;
