import * as React from 'react';
import { useState } from 'react';
import { Box } from '@material-ui/core';
import { AddressView, AddressPaper, AddressEdit, SuccessStep } from '../index';
import { VIEW_STEP, EDIT_STEP, SUCCESS_STEP } from './steps';

export const AddressBlock = () => {
	const [step, setStep] = useState(VIEW_STEP);
	const renderStep = () => {
		switch (step) {
			case VIEW_STEP:
				return <AddressView goToEdit={() => setStep(EDIT_STEP)} />;
			case EDIT_STEP:
				return <AddressEdit goToSuccess={() => setStep(SUCCESS_STEP)} />;
			case SUCCESS_STEP:
				return <SuccessStep />;
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