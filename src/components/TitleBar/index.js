import React, {Component}    from 'react';
import AppBar                from '@material-ui/core/es/AppBar';
import {Toolbar, Typography} from '@material-ui/core';
import styles                from './TitleBar.style';

export default class TitleBar extends Component {
	/**
	 * 	Renderiza la barra de título
	 * @returns {*}
	 */
	render() {
		return (
				<AppBar position="static" style={styles.appBar}>
					<Toolbar style={styles.toolBar}>
						<Typography variant="h6" style={styles.textBar}>
							{this.props.title}
						</Typography>
					</Toolbar>
				</AppBar>
		);
	}
}
