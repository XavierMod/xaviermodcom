import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ResoData from './ResoData';
import styled from 'styled-components';
import NavBar from './library/Navbar';
import MainResources from './resourcesComponents/MainResources';
import ResourcesTemplate from './resourcesComponents/ResourcesTemplate';
import Logo from '../landing/LogoMain';
import { largerThan, smallerThan } from '../../helpers/mediaQueries'; 


const Background = styled.div`
    height: 1000px;
`;

const ResizeLogo = styled.div`
    ${smallerThan.mobile`
        display: none;
    `};
`;

class ResourcesLayout extends Component {
    constructor(props) {
        super(props);
        this.state = { ...ResoData }
    }

    render() {
        const routes = this.state.navLinks.map((el, ind, arr) => {

            return <Route path={this.props.match.path + `/${el}`} exact render={() => <ResourcesTemplate route={el} {...this.state} />}  />
            });

        return (
            <Background>
                <ResizeLogo>
                    <a href="/"><Logo /></a>
                </ResizeLogo>

                <NavBar {...this.state} getUrl={this.props}/>
                <Route path='/resources' exact render={() => <MainResources {...this.state} />} />
                {routes}
            </Background>
        );
        }
};

export default ResourcesLayout;