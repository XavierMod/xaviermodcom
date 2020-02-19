import React, { Component } from 'react';
import styled from 'styled-components';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 
import MainButton from '../library/MainButton';
import MainLogo from '../landing/LogoMain';

import PageTemplate from './template/pages/PageTemplate';
import MobileBar from './template/MobileBar';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


//Importing data
import { testDocsProject } from './data/testDocsProject';

const DocsContainer = styled.div`
`;

const DocsStructure = styled.div`
    overflow: auto; /* Fixes a bug */
    height: 100%;
`;

const LeftBar = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 100;

    position: fixed;
    background-color: #191B2A;
    width: 270px;
    height: 100%;

    padding: 40px;
    padding-top: 130px;

    ${smallerThan.mobile`
        display: none;

    `};
`;

const BtnBar = styled.div`
    button {
        margin: 10px;
    }

`;

const Footer = styled.p`
    color: white;
    font-size: 12px;
    position: absolute;
    bottom: 20px;
`;

const RightBody = styled.div`
    flex: 8;
`;

const BodyContainer = styled.div`
    height: 100%;
    margin: auto 70px;
    margin-left: 320px;
    margin-top: 120px;
    

    font-family: 'Roboto', sans-serif;

    ${smallerThan.mobile`
        margin: 20px;
        margin-top: 120px;
    `};

    h1 {
        color: black;
        font-size: 40px;
        font-weight: 100;
        margin-bottom: 20px;
    }
    
`;

const NextPageCtr = styled.div`
    position: fixed;
    bottom: 20px;
    right: 0;

    ${smallerThan.mobile`
        display: block;
        position: fixed;
        width: 100%;
        padding: 20px;
    `};
`;

const HideMainLogo = styled.div`
    ${smallerThan.mobile`
        display: none;

    `};
`;

class docsMainTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        console.log(this.props)

        const renderListElements = testDocsProject.navElements.map((el, ind, arr) => {
            return (
                <Link to={ this.props.match.path + '/' + el.url }><MainButton emoji="💻" type="white" text={el.name} /></Link>
            );
        });

        const renderRouteElements = testDocsProject.navElements.map((el, ind, arr) => {
            return (
                <Route 
                path={this.props.match.path + '/' + el.url} 
                render={() => <PageTemplate title={el.name} />}

                />
            );
        });

        return (
            <DocsContainer>
                <HideMainLogo>
                    <MainLogo type="white" />
                </HideMainLogo>
                <DocsStructure>
                    <MobileBar />
                    <LeftBar> 
                        <BtnBar>
                            {renderListElements}
                            <Footer>Designed and built by Xavier Mod</Footer>
                        </BtnBar>
                    </LeftBar>
                    <RightBody>
                        <BodyContainer>
                           {renderRouteElements}
                        </BodyContainer>
                    </RightBody>
                    <NextPageCtr>
                        <MainButton emoji="💻" type="blue" text="Next page" />
                    </NextPageCtr>
                </DocsStructure>
            </DocsContainer>
        );
    }
};

export default docsMainTemplate;