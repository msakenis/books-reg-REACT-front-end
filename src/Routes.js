import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Loading, PrivateRoute } from './components';

const Bookslazy = lazy(() => import('./pages/ViewBooks/ViewBooks'));
const AddBook = lazy(() => import('./pages/AddBook/AddBook'));
const Loginlazy = lazy(() => import('./pages/Login/Login'));
const Registerlazy = lazy(() => import('./pages/Register/Register'));
const Statslazy = lazy(() => import('./pages/Stats/Stats'));
function Routes() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute exact path="/" component={Bookslazy} />
          <PrivateRoute exact path="/books" component={Bookslazy} />
          <PrivateRoute exact path="/add-book" component={AddBook} />
          <PrivateRoute exact path="/stats" component={Statslazy} />
          <Route exact path="/login" component={Loginlazy} />
          <Route exact path="/register" component={Registerlazy} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default Routes;
