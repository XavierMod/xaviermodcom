import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 

import LogoMain from './LogoMain';
import SocialBar from './SocialBar';
import TextBlock from './TextBlock';
import Greeting from './Greeting';
import BtnContainer from './BtnContainer'

import data from '../../projectsData/test';
import Me from '../../assets/me.png';

const LandingContainer = styled.div`
    overflow: hidden;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");

    ${smallerThan.mobile`
        overflow: scroll;

    `};
    
    `;


const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;

    ${smallerThan.mobile`
        display: block;
  `};
`;

const TextContainer = styled.div`
    padding: 100px;
    height: 100vh;
    padding-top: 40vh;
    animation: moveInLeft 1s ease-out 0.5s;
    animation-fill-mode: backwards;

    ${smallerThan.mobile`
        padding: 20px;
        margin-bottom: 70px;
        height: auto;

  `};
`;

const ImageMe = styled.div`

img {
    width: 400px;
    margin: 50px;

    ${smallerThan.mobile`
        max-width: 60%;
        margin: 90px auto 30px auto;

  `};
}
    
    ${smallerThan.mobile`
        display: block;
        margin: auto;
        text-align: center;

    `};
`;

const MadeMessage = styled.div`
    background-color: black;
    display: flex;
    p {
        padding: 15px;
        color: white;
        text-align: left;
        font-size: 14px;
        display: inline-block;
        flex: 90%;
    }

    a {
        flex: 10%;
        margin: 10px;
        margin-right: 30px;
        padding: 10px;
        color: white;
        border: 1px solid white;
        text-align: center;
        border-radius: 0;
        text-decoration: none;
        font-size: 12px;
        border-radius: 5px;
        transition: all ease 0.3s;

        ${smallerThan.mobile`
        height: 40px;

    `};
    }

    a:hover {
        background-color: white;
        color: black;
    }

`;

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        
        // alert('Remember, this is just a pre-build, not the final website.')
        console.log(data);
        return (
            <LandingContainer>
                {/* Main Nav Bar */}
                <LogoMain />
                <SocialBar />

                {/* Body */}
                <ContentContainer>
                <ImageMe>
                    <img src={Me} />
                </ImageMe>
                    <TextContainer>
                        <Greeting />
                        <TextBlock 
                            text="Front End Developer / Designer. 👋 I’m Xavier and I design/build UIs and digital products using web technologies. " />
                        <BtnContainer />
                    </TextContainer>
                </ContentContainer>
                <MadeMessage>
                    <p><strong>2019.</strong> Designed and built by Xavier Mod with React and Firebase. Hosted on GitHub and Netlify.</p>
                    <a href="#">Repo</a>
                    </MadeMessage>
            </LandingContainer>
        );
    }
};

export default Landing;