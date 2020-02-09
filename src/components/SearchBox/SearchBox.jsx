import * as React from 'react';
import { useState } from 'react';
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

export const SearchBox = () => {
	const [searchText, setSearchText] = useState('');
	const [items, setItems] = useState([]);
	const onChange = e => {
		setSearchText(e.target.value);
		sendSearchAddressRequest(e.target.value).then(response => {
			setItems(response.results);
		})
	};
	return (
		<SearchBoxContainer fullWidth>
			<Autocomplete
				getItemValue={(item) => item.formatted_address}
				items={items}
				renderInput={props => (
					<FormControl variant="outlined" fullWidth>
						<InputLabel htmlFor="outlined-address">Address</InputLabel>
						<OutlinedInput
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
							{...props}
						/>
					</FormControl>
				)}
				wrapperStyle={{ width: '100%' }}
				renderItem={(item, isHighlighted) =>
					<div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
						{item.formatted_address}
					</div>
				}
				value={searchText}
				onChange={onChange}
				onSelect={val => setSearchText(val)}
			/>
		</SearchBoxContainer>
	)
};