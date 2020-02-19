import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import LogoMain from '../landing/LogoMain';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SocialBar from '../landing/SocialBar';

import MainButton from '../library/MainButton';
import TextModule from './TextModule';

const ProfilePageContainer = styled.div`
    /* padding: 20px; */
    padding-top: 100px;
    margin: auto;
    max-width: 100%;
    overflow: auto;    
    background-color: #000000;
`;

const BackgroundContainer = styled.div`
    background-color: #131313;
    height: 100%;

    ${largerThan.mobile`
        height: 100vh;
    `};

`;

const Underlined = styled.span`

    a {
    text-decoration: none;
    color: white;
    font-weight: 700;
    background-image: linear-gradient(yellow, yellow);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 100%;
    transition: background-size .3s;
    }

    a:hover, a:focus {
        color: black;
        background-size: 100% 100%;
    }

    
`;

const BtnContainer = styled.div`
    position: fixed;
    bottom: 30px;
    right: 0;

    animation: moveInRight 1.5s ease-out;
    animation-fill-mode: backwards;

    ${smallerThan.mobile`
        margin: 30px;
        padding-bottom: 20px;
        position: static;
    `};
`;

class profilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Link to="/"><LogoMain type="white" /></Link>
                <BackgroundContainer>
                    <SocialBar type="white" />
                    <ProfilePageContainer>
                        <TextModule
                            title="who am i?"
                            body={["Hola! I love making digital things both look good and function in a browser/device at the same time by combining both design sensibilities and technical skills together. In other words,", <strong> I'm a junior front end dev who can also design!. </strong>, "Actively seeking job opportunities and side projects. Based in London."]}
                            body2="Languages: 🇬🇧 English, 🇪🇸 Spanish, Catalan"
                        />
                        <TextModule
                            title="skills / tech stack"
                            body={[<strong>💻 Front End Dev: </strong>, "HTML/CSS/JS ESNext, React.js, Shopify (Liquid), NPM, Webpack, Babel, Git, JQuery, Three.js"]}
                            body2={[<strong>🦄 UI Design : </strong>, "Sketch, Figma, Adobe Experience, Invission, Zeplin, Adobe Creative Suite, Motion Design (After Effects)"]}
                            addPopover={true}
                        />
                        <TextModule
                            title="career"
                            body={["<2019-2020> Front-End Developer at", <Underlined> <a href="https://karmoon.co.uk/">Karmoon</a> </Underlined>,]}
                            body2={["<2018-2019> UI Designer / Developer at", <Underlined> <a href="#">FitSprint</a> </Underlined>,]}
                            body3={["<2017-2018> UI Junior, Graphic Designer and Marketing Assistant at" , <Underlined> <a href="#">Furgo</a> </Underlined>,]}
                        />
                        <TextModule
                            title="learning path"
                            body2={["<2018-2022> 💻 BSc Digital Design (Web Development, Interaction Design, Graphics...) -" , <Underlined> <a href="https://www.brunel.ac.uk/study/undergraduate/Digital-Design-BSc">Brunel University London</a> </Underlined>,]}
                            body3={["<2016-2018> 🎯 Marketing & Advertising - ", <Underlined> <a href="#">CEP Barcelona</a> </Underlined>,]}
                            body4="Web Design and Development (HTML/CSS/JS), Interaction Design and Usability, Server-side Web Development (PHP, SQL), Mobile Web Development, OOP Front-End Programming, Digital Graphics,Digital Creativity, Digital Design Theory, Data Modelling, ."
                        />

                    <BtnContainer>
                        <Link to="/projects/xavier-mod-website"><MainButton emoji="👨🏻‍💻" type="white" text="Explore work" /></Link>
                    </BtnContainer>
                    </ProfilePageContainer>
                </BackgroundContainer>
            </React.Fragment>
        );
    }
};

export default profilePage;