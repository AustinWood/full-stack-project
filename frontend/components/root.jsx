import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form_container';
import Home from './home';


const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/login');
    }
  };

  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
        <Route path="/" component={ App } onEnter={_ensureLoggedIn} />
      </Router>
    </Provider>
  );

  // return (
  //   <Provider store={ store }>
  //     <Router history={ hashHistory }>
  //       <App>
  //         <Route path="/login" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
  //         <Route path="/signup" component={ SessionFormContainer } onEnter={_redirectIfLoggedIn} />
  //         <Route path="/" component={ Home } onEnter={_ensureLoggedIn} />
  //       </App>
  //     </Router>
  //   </Provider>
  // );

};



export default Root;
