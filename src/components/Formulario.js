import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import Error from './Error';

const Formulario = ({ setGasto, setCrearGasto }) => {
	const [nombreGasto, setNombreGasto] = useState('');
	const [cantidad, setCantidad] = useState(0);
	const [error, setError] = useState(false);

	const onSubmit = e => {
		e.preventDefault();

		// Validar
		if (cantidad < 1 || isNaN(cantidad) || nombreGasto.trim() === '') {
			setError(true);
		}
		setError(false);

		// Construir Gasto
		const gasto = {
			nombreGasto,
			cantidad,
			id: shortid.generate(),
		};

		// Pasas el gasto al comonente principal
		setGasto(gasto);
		setCrearGasto(true);

		// Resetear el formulario
		setNombreGasto('');
		setCantidad(0);
	};

	return (
		<form onSubmit={onSubmit}>
			<h2>Agrega tus gastos aquí</h2>

			{error ? (
				<Error msg='Ambos campos son obligatorios o Presupuesto Incorrecto' />
			) : null}

			<div className='campo'>
				<label>Nombre Gasto</label>
				<input
					type='text'
					className='u-full-width'
					placeholder='Ej. Transporte'
					value={nombreGasto}
					onChange={e => setNombreGasto(e.target.value)}
				/>
			</div>

			<div className='campo'>
				<label>Cantidad Gasto</label>
				<input
					type='number'
					className='u-full-width'
					placeholder='Ej. 300'
					value={cantidad}
					onChange={e => setCantidad(parseInt(e.target.value), 10)}
				/>
			</div>

			<input
				type='submit'
				className='button-primary u-full-width'
				value='Agregar Gasto'
			/>
		</form>
	);
};

Formulario.propTypes = {
	setGasto: PropTypes.func.isRequired,
	setCrearGasto: PropTypes.func.isRequired,
};

export default Formulario;
