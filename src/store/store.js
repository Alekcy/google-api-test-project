import React, {createContext, useReducer} from 'react';
import { SET_ADDRESS, SET_COMPONENTS } from './actionTypes';

const initialState = {
	addressStore: null
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer((state, action) => {
		switch(action.type) {
			case SET_ADDRESS:
				return {
					...state,
					addressStore: {
						...action.address,
						addressComponents: action.address.address_components.reduce((obj, item) => {
							return {
								...obj,
								[item.types[0]]: item.long_name,
							};
						}, {})
					}
				};
			case SET_COMPONENTS:
				return {
					...state,
					addressStore: {
						...state.addressStore,
						addressComponents: {
							...state.addressComponents,
							...action.addressComponents,
						}
					}
				};
			default:
				throw new Error();
		};
	}, initialState);

	return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }