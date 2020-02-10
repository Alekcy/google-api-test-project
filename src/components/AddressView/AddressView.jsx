import * as React from 'react';
import { useContext } from 'react';
import { Box, Grid, Paper, Typography, Button } from '@material-ui/core';
import { store } from "../../store/store";
import { AddressViewListItem } from "./AddressViewListItem";

export const AddressView = ({ goToEdit }) => {
	const globalState = useContext(store);
	const addressComponents = globalState.state.addressStore.addressComponents;
	return (
		<Box>
			<Typography variant="h5">
				You selected:
			</Typography>
			<AddressViewListItem label="Country" value={addressComponents.country} />
			<AddressViewListItem label="Administrative area" value={addressComponents.administrative_area_level_1} />
			<AddressViewListItem label="City" value={addressComponents.locality} />
			<AddressViewListItem label="Street" value={addressComponents.route} />
			<AddressViewListItem label="Street number" value={addressComponents.street_number} />
			<AddressViewListItem label="Apartment #" value={addressComponents.subpremise} />
			<AddressViewListItem label="Postal code" value={addressComponents.postal_code} />
			<Button variant="contained" color="primary" onClick={goToEdit}>
				Edit
			</Button>
		</Box>
	)
};