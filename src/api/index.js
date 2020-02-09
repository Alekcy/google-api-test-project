const API_KEY = 'AIzaSyCGJcsoMCaGARjqCdDXnWeM18Yi_rjSZGQ';
const apiUrl = 'https://maps.googleapis.com/maps/api/geocode';

export async function sendSearchAddressRequest(searchText) {
	let res = await fetch(`${apiUrl}/json?address=${searchText}&key=${API_KEY}`);
	return await res.json();
};