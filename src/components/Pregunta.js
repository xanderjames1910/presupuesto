import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Error from './Error';

const Pregunta = ({ setPresupuesto, setRestante, setMostrarPregunta }) => {
	// Definir el state
	const [cantidad, setCantidad] = useState(0);

	const [error, setError] = useState(false);

	// Función que lee el presupuesto
	const handleChange = e => {
		setCantidad(parseInt(e.target.value, 10));
	};

	const onSubmit = e => {
		e.preventDefault();

		// Validar
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true);
			return;
		}

		// Si se pasa la validación
		setError(false);
		setPresupuesto(cantidad);
		setRestante(cantidad);
		setMostrarPregunta(false);
	};
	return (
		<>
			<h2>Coloca tu presupuesto</h2>
			{error ? <Error msg='El presupuesto es incorrecto' /> : null}
			<form onSubmit={onSubmit}>
				<input
					type='number'
					className='u-full-width'
					placeholder='Coloca tu presupuesto'
					onChange={handleChange}
				/>
				<input
					type='submit'
					className='button-primary u-full-width'
					value='Definir Presupuesto'
				/>
			</form>
		</>
	);
};

Pregunta.propTypes = {
	setPresupuesto: PropTypes.func.isRequired,
	setRestante: PropTypes.func.isRequired,
	setMostrarPregunta: PropTypes.func.isRequired,
};

export default Pregunta;
