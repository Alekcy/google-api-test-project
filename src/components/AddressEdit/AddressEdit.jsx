import * as React from 'react';
import { Box, TextField, Grid, Button } from '@material-ui/core';
import { useContext, useState, useEffect } from 'react';
import { store } from "../../store/store";
import { ErrorMessage } from "./ErrorMessage";
import {SET_COMPONENTS} from "../../store/actionTypes";

export const AddressEdit = ({ goToSuccess }) => {
	const globalState = useContext(store);
	const addressComponents = globalState.state.addressStore.addressComponents;
	const [components, setComponents] = useState({
		country: null,
		administrative_area_level_1: null,
		locality: null,
		route: null,
		street_number: null,
		subpremise: null,
		postal_code: null
	});
	const [error, setError] = useState(null);
	useEffect(() => {
		setComponents({
			country: addressComponents.country,
			administrative_area_level_1: addressComponents.administrative_area_level_1,
			locality: addressComponents.locality,
			route: addressComponents.route,
			street_number: addressComponents.street_number,
			subpremise: addressComponents.subpremise,
			postal_code: addressComponents.postal_code,
		});
	}, []);
	const onSave = () => {
		if (Object.values(components).filter(component => component === null || component === undefined).length === 0) {
			globalState.dispatch({ type: SET_COMPONENTS, addressComponents: components });
			goToSuccess();
		} else {
			setError('Fill in all the fields');
		}
	};
	return (
		<Box>
			<Grid container>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, country: e.target.value})}
						label="Country" value={components.country}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, administrative_area_level_1: e.target.value})}
						label="Administrative area" value={components.administrative_area_level_1}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, locality: e.target.value})}
						label="City" value={components.locality}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, route: e.target.value})}
						label="Street" value={components.route}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, street_number: e.target.value})}
						label="Street number" value={components.street_number}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, subpremise: e.target.value})}
						label="Apartment #" value={components.subpremise}
					/>
				</Grid>
				<Grid item xs={4}>
					<TextField
						onChange={e=>setComponents({...components, postal_code: e.target.value})}
						label="Postal code" value={components.postal_code}
					/>
				</Grid>
			</Grid>
			{ error && <ErrorMessage>{error}</ErrorMessage> }
			<Button color="primary" variant="contained" onClick={() => onSave()}>
				Save
			</Button>
		</Box>
	);
};