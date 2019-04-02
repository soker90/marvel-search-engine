import React, {Component}                  from 'react'
import {Divider, InputBase, Paper, Button} from '@material-ui/core';
import styles                              from './SearchBox.style';
import IconButton                          from '@material-ui/core/es/IconButton/IconButton';
import SearchIcon                          from '@material-ui/icons/Search';

export default class SearchBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		}
	}

	/**
	 * Función disparada por el evento onChange del input
	 * @param ev
	 * @private
	 */
	_onChangeInputSearch = ev => {
		this.setState({value: ev.target.value});
		if (this.state.value.length >= 3) this._searchValue();
	};

	/**
	 * Función que dispara la acción de busqueda
	 * @private
	 */
	_searchValue() {
		this.props.searchAction(this.state.value);
	}

	/**
	 * Renderiza la pantalla
	 * @returns {*}
	 */
	render() {
		return (
			<Paper style={styles.container}>
				<InputBase
					style={styles.input}
					placeholder={this.props.label}
					onChange={this._onChangeInputSearch}
					value={this.state.value}/>

				<Divider style={styles.separator}/>

				<IconButton
					aria-label={this.props.label}
					component={Button}
					onClick={this._searchValue.bind(this)}>
					<SearchIcon/>
				</IconButton>
			</Paper>
		)
	}
}
