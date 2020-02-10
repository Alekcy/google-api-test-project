import * as React from 'react';
import { Box, Typography } from '@material-ui/core';
import { useContext } from 'react';
import { store } from "../../store/store";

export const SuccessStep = () => {
	const globalState = useContext(store);
	const addressComponents = globalState.state.addressStore.addressComponents;
	const renderFullAddress = () => {
		return (
			<Box>
				{addressComponents.country},
				{addressComponents.administrative_area_level_1},
				{addressComponents.locality},
				{addressComponents.route},
				{addressComponents.street_number},
				{addressComponents.subpremise},
				{addressComponents.postal_code}
			</Box>
		)
	};
	return (
		<Box>
			<Typography variant="h4">Success! You select address:</Typography>
			<Box>
				{renderFullAddress()}
			</Box>
		</Box>
	)
};