import React, {Component}               from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider}                       from 'react-redux';
import configureStore                   from './store/configureStore';
import ConfigRouter                     from './Routing';
import SearchView                       from './views/SearchView';
import {SnackbarProvider}               from 'notistack';
import {Button}                         from '@material-ui/core';

let store = configureStore();

const _renderNotificationCard = (
	<Button key={Math.random()} size="small"
			color={'inherit'}> Cerrar </Button>
);

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<SnackbarProvider maxSnack={3} action={[_renderNotificationCard]}>
					<Router>
						<div>
							{
								(() => {
									//Una ayuda para depurar
									if (process.env.NODE_ENV === 'development') {
										const DevTools = require('./containers/DevTools').default;
										return <DevTools/>
									}
								})()
							}
							<Route exact path={ConfigRouter.root} component={SearchView}/>
						</div>
					</Router>
				</SnackbarProvider>
			</Provider>
		);
	}
}

export default App;
