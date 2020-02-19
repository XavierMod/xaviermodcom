import React, { Component, Suspense } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Landing from './components/landing/Landing';
// import ProfilePage from './components/profile/profilePage';
import MainProjects from './components/projects/MainProjects';
import NothingFound from './components/library/NothingFound/NothingFound';
import MainDocs from './components/docs/MainDocs';
import ResourcesLayout from './components/resources/ResourcesLayout';

const Profile = React.lazy(() => import('./components/profile/profilePage'));

function Website() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/profile" render={() => 
        <Suspense fallback={<div>loading...</div>}>
          <Profile />
          </Suspense>} />
        <Route path="/projects" component={MainProjects} />
        <Route exact path="/" component={Landing} />
        <Route path="/docs" component={MainDocs}/>
        <Route path="/resources" component={ResourcesLayout} />
        {/* <Route path="/:id" component={NothingFound} /> */}
      </Switch>
    </React.Fragment>
  );
}

export default Website;