import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Catalog from './main/Catalog';
import Home from './main/Home';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					{Home}
				</Route>
				<Route exact path="/catalog">
					{Catalog}
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;
