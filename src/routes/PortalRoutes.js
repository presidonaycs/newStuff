import React from 'react';
import { Switch, Route } from 'react-router';
import { pure } from 'recompose';

import ProtectedRoute from './ProtectedRoute';

import Dashboard from '../components/pages/Dashboard';
import MdaSetup from '../components/pages/MdaSetup';
import RolesSetup from '../components/pages/RolesSetup';
import EmployeeProfile from '../components/pages/EmployeeProfile';
import EmployeeDetails from '../components/pages/EmployeeDetails';
import SupervisorOrganogram from '../components/pages/SupervisorOrganogram';

export default pure(() => (
  <Switch>
    <ProtectedRoute
      path="/admin-portal/"
      exact
      component={Dashboard}
    />
    <ProtectedRoute
      path="/admin-portal/mda-setup"
      exact
      component={MdaSetup}
    />
    <ProtectedRoute
      path="/admin-portal/roles-setup"
      exact
      component={RolesSetup}
    />
    <ProtectedRoute
      path="/admin-portal/employee-profile"
      exact
      component={EmployeeProfile}
    />
    <ProtectedRoute
      path="/admin-portal/employee-details"
      exact
      component={EmployeeDetails}
    />
    <ProtectedRoute
      path="/admin-portal/supervisor-organogram"
      exact
      component={SupervisorOrganogram}
    />
    <Route render={() => <h1>Error 404. Page not found.</h1>} />
  </Switch>
));
