import {Switch, Route, Link} from 'react-router-dom'

import ServerPOCComp from './ServerPOC/ServerPOC';
import UserComp from './User';
import UsersComp from './Users';

function MainPageComp() {
  return (
    <div className="App">
      
      <h1>Welcome to our users web site !!</h1>

      <Switch>
          <Route exact path="/">
              <UsersComp />
          </Route>
          <Route  path="/user/:id">
              <UserComp />
          </Route>
      </Switch>

    </div>
  );
}

export default MainPageComp;
