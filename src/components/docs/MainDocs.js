import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';


//Importing data
import { testDocsProject } from './data/testDocsProject';
import DocsMainTemplate from './docsMainTemplate';

class MainDocs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Route path='/docs' exact component={DocsMainTemplate} />
                <Route path={'/docs' + '/' + testDocsProject.projectName} component={DocsMainTemplate} />
            </React.Fragment>
        );
        }
};

export default MainDocs;