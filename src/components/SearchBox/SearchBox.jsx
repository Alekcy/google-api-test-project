import * as React from 'react';
import { useState, useContext } from 'react';
import {
	OutlinedInput,
	InputLabel,
	InputAdornment,
	FormControl,
	IconButton,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';
import Autocomplete from 'react-autocomplete';
import { SearchBoxContainer } from './SearchBoxContainer';
import { sendSearchAddressRequest } from "../../api/index";
import { store } from "../../store/store";
import { SET_ADDRESS } from "../../store/actionTypes";

export const SearchBox = () => {
	const globalState = useContext(store);
	const [searchText, setSearchText] = useState('');
	const [addressList, setAddressList] = useState([]);
	const onChange = e => {
		setSearchText(e.target.value);
		if (e.target.value.length > 3) {
			sendSearchAddressRequest(e.target.value)
				.then(response => setAddressList(response.results));
		}
	};
	const onSelect = value => {
		setSearchText(value);
		const address = addressList.find(item => item.formatted_address === value);
		globalState.dispatch({ type: SET_ADDRESS, address: address });
	};
	return (
		<SearchBoxContainer fullWidth>
			<Autocomplete
				value={searchText}
				onChange={onChange}
				onSelect={onSelect}
				getItemValue={(item) => item.formatted_address}
				items={addressList}
				renderInput={props => {
					const { ref, ...rest } = props;
					return (
						<FormControl variant="outlined" fullWidth>
							<InputLabel htmlFor="outlined-address">Address</InputLabel>
							<OutlinedInput
								{...rest} inputRef={ref}
								id="outlined-address"
								endAdornment={
									<InputAdornment position="end">
										<IconButton
											aria-label="Search"
											onClick={() => {}}
											edge="end"
										>
											<Search />
										</IconButton>
									</InputAdornment>
								}
								labelWidth={70}
							/>
						</FormControl>
					)
				}}
				wrapperStyle={{ width: '100%' }}
				renderItem={(item, isHighlighted) =>
					<div key={item.id} style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
						{item.formatted_address}
					</div>
				}
			/>
		</SearchBoxContainer>
	)
};