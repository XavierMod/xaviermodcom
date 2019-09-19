import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import LogoMain from '../landing/LogoMain';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import SocialBar from '../landing/SocialBar';


import TextModule from './TextModule';

const ProfilePageContainer = styled.div`
    /* padding: 20px; */
    padding-top: 100px;
    margin: auto;
    max-width: 1400px;
    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;
    background-color: #000000;
    background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const BackgroundContainer = styled.div`
    background-color: #131313;
    height: 100vh;

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

class profilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        // Sets body to white
        document.querySelector('body').style.backgroundColor='#131313';
        document.querySelector('html').style.backgroundColor='#131313';
        
        return (
            <React.Fragment>
                <Link to="/"><LogoMain type="white" /></Link>
                <BackgroundContainer>
                    <SocialBar type="white" />
                    <ProfilePageContainer>
                        <TextModule
                            title="who am i?"
                            body={["Hola! I love making digital things both look good and function in a browser/device at the same time by combining both design sensibilities and technical skills together. In other words, I'm a junior front end dev who can also design! Actively seeking job opportunities and side projects. Based in London."]}
                            listItem2="🇪🇸 Born in Barcelona"
                            listItem3="✌🏻 22 y/o"
                            listItem4="💬 English (fluent), Spanish (fluent), Catalan (fluent)"
                            listItem5="🎓 University Student"
                        />
                        <TextModule
                            title="skills / tech stack"
                            body={[<strong>💻 Front End Dev: </strong>, "HTML/CSS/JS ESNext, React.js, NPM, Webpack, Babel, Git, JQuery, D3.js Wordpress Implementation"]}
                            body2={[<strong>🦄 UI Design : </strong>, "Sketch, Figma, Adobe Experience, Invission, Zeplin, Adobe Creative Suite, Motion Design (After Effects)"]}
                        />
                        <TextModule
                            title="career"
                            body={["<2018-2019> UI Designer / Developer at", <Underlined> <a href="#">FitSprint</a> </Underlined>,]}
                            body2={["<2017-2018> UI Junior, Graphic Designer and Marketing Assistant at" , <Underlined> <a href="#">Furgo</a> </Underlined>,]}
                        />
                        <TextModule
                            title="studies"
                            body="<2018-> 💻 Self Directed Front End Development Learning - freeCodeAcademy, Udemy... >"
                            body2={["<2018-2022> 💻 BSc Digital Design -" , <Underlined> <a href="https://www.brunel.ac.uk/study/undergraduate/Digital-Design-BSc">Brunel University London</a> </Underlined>,]}
                            body3={["<2016-2018> 🎯 Marketing & Advertising - ", <Underlined> <a href="#">CEP Barcelona</a> </Underlined>,]}
                        />
                    </ProfilePageContainer>
                </BackgroundContainer>
            </React.Fragment>
        );
    }
};

export default profilePage;