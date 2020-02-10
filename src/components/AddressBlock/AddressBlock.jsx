import * as React from 'react';
import { useState } from 'react';
import { Box, Grid } from '@material-ui/core';
import { AddressView, AddressPaper } from '../index';
import { VIEW_STEP, EDIT_STEP, SUCCESS_STEP } from './steps';

export const AddressBlock = () => {
	const [step, setStep] = useState(VIEW_STEP);
	const renderStep = () => {
		switch (step) {
			case VIEW_STEP:
				return <AddressView/>
		}
	};
	return (
		<Box>
			<AddressPaper>
				{renderStep()}
			</AddressPaper>
		</Box>
	)
};