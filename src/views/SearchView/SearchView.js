import React, {Component} from 'react'
import TitleBar           from '../../components/TitleBar';
import SearchBox          from '../../components/SearchBox';
import CardCharacter      from '../../components/CardCharacter';
import {CircularProgress} from '@material-ui/core';
import styles             from './SearchView.style'

export default class SearchView extends Component {
	/**
	 * Comprueba y envía las notificaciones al usuario cada vez que se actualiza el componente
	 * @param nextProps
	 * @param nextState
	 * @param nextContext
	 */
	componentWillUpdate(nextProps, nextState, nextContext) {
		if (this.props.message)
			this.props.sendNotification(this.props.enqueueSnackbar, this.props.message, this.props.status);
	}

	/**
	 * Renderiza las tarjetas con los resultados de busqueda
	 * @returns {*}
	 * @private
	 */
	_renderSearchCards = () => (
		<div>
			<div style={styles.containerCards}
			>
				{
					this.props.allCharacters.map((item, idx) =>
						<CardCharacter key={idx} name={item.name} description={item.description}
									   thumbnail={item.thumbnail} style={styles.card}/>,
					)
				}
			</div>
		</div>
	);

	/**
	 * Renderiza la animación de cargando
	 * @returns {*}
	 * @private
	 */
	_renderLoading = () => (
		<div style={styles.loadingProgress}>
			<CircularProgress />
		</div>
	);

	/**
	 * Renderiza la caja de busqueda
	 * @returns {*}
	 * @private
	 */
	_renderSearchBox = () => (
		<div style={styles.searchBox}>
			<SearchBox label={'Buscar'} searchAction={this.props.fetchCharacters}/>
		</div>
	);

	/**
	 * Renderiza la pantalla
	 * @returns {*}
	 */
	render() {
		return (
			<div>
				<TitleBar title="Buscador de personajes de Marvel"/>

				{this._renderSearchBox()}

				{(this.props.loading) ? this._renderLoading() : this._renderSearchCards()}
			</div>
		)
	}
}
