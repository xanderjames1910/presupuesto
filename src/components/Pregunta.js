import React, { useState } from 'react';

const Pregunta = () => {
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
		if (cantidad < 1) {
			setError(true);
      }
      
      // Si se pasa la validación
	};
	return (
		<>
			<h2>Coloca tu presupuesto</h2>
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

export default Pregunta;
