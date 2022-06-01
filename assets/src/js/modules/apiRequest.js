import { API_URL } from '../constants';
import axios from 'axios';

export const apiRequest = (action, imageId) => {
	const data = new URLSearchParams();
	data.append('action', action);
	data.append('imageId', imageId);

	axios
		.post(API_URL, data)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
};
