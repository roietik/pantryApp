import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import Pantry from 'views/Pantry';
import ShoppingList from 'views/ShoppingList';
import Settings from 'views/Settings';
import EditPage from 'views/EditPage';
import DeletePage from 'views/DeletePage';
import AddPage from 'views/AddPage';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <HashRouter>
          <MainTemplate>
            <Switch>
              <Route exact path={routes.home} render={() => <Redirect to={routes.pantry} />} />
              <Route exact path={routes.pantry} component={Pantry} />
              <Route exact path={routes.pantryEdit} component={EditPage} />
              <Route exact path={routes.pantryDelete} component={DeletePage} />
              <Route exact path={routes.shoppingList} component={ShoppingList} />
              <Route exact path={routes.shoppingListEdit} component={EditPage} />
              <Route exact path={routes.shoppingListDelete} component={DeletePage} />
              <Route exact path={routes.settings} component={Settings} />
              <Route exact path={routes.add} component={AddPage} />
            </Switch>
          </MainTemplate>
        </HashRouter>
      </Provider>
    </>
  );
};

export default App;
