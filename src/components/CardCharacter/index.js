import React, {Component} from 'react'
import styles             from './CardCharacter.style';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Typography,
}                         from '@material-ui/core';

export default class CardCharacter extends Component {
	/**
	 * Renderiza el componente
	 * @returns {*}
	 */
	render() {
		return (
			<Card style={{...styles.card, ...this.props.style}}>
				<CardActionArea>
					<CardMedia
						style={styles.media}
						image={this.props.thumbnail}
					/>
					<CardContent>
						<Typography variant="h5" component="h2">
							{this.props.name}
						</Typography>
						<Typography component="p">
							{this.props.description}
						</Typography>
					</CardContent>
				</CardActionArea>
			</Card>
		)
	}
}
