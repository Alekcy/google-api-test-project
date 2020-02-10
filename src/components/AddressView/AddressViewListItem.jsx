import * as React from 'react';
import { Box, Grid, Paper, Typography } from '@material-ui/core';

export const AddressViewListItem = ({ value, label }) => {
	if (!value || !value.long_name) return null;
	return (
		<Grid container>
			<Grid item xs={4}>
				<Typography>{label}: </Typography>
			</Grid>
			<Grid item xs={8}>
				<Typography>{value.long_name}</Typography>
			</Grid>
		</Grid>
	)
};