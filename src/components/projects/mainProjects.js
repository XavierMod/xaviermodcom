import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import axios from '../../axios';

import ProjectTemplate from './ProjectTemplate';
import { get } from 'https';

import Spinner from '../library/Spinner';
// import { Spinner } from 'reactstrap';

class MainProjects extends Component {

    state = {
        projects: [],
        loading: true
    }

    componentDidMount() {
        console.log('I just got data from fb')
        axios.get('/.json')
            .then(response => {
                var newArr = [];
                Object.keys(response.data).forEach((el, ind, arr) => {
                    newArr.push(response.data[el]);
                });
                this.setState({projects: newArr});
                this.setState({loading: false});
                
            })
            .catch(error => {
                console.log(error)
            })
    }

    render () {


        const getAllUrls = () => {
            var urls = [];
            this.state.projects.forEach((el, ind, arr) => {
                urls.push(el.id);
            });
            return urls;
        }

        // Renders all small posts
        const templates = this.state.projects.map((el, ind, arr) => {
            return <Route key={el.id} path={this.props.match.url + "/" + el.id} exact
            render={() => 
            <ProjectTemplate
                {...this.props}
                data={this.state.projects[ind]}
                url={el.id}
                indUrl={ind}
                key={el.company}
                title={el.title}
                allUrls={getAllUrls()}
                info={el.info} />} />
        });

        return (
            <React.Fragment>
                {this.state.loading ? <Spinner /> : null}
                {templates}
            </React.Fragment>
          )
    }
}


export default MainProjects;