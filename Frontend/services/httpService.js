import axios from "axios";
import { toast } from "react-toastify";
const BASE_ENDPOINT = process.env.NEXT_PUBLIC_API_KEY;

// Set config defaults
const http = axios.create({
	baseURL: BASE_ENDPOINT,
	headers:
	{
		"Access-Control-Allow-Origin": "*",
		'Access-Control-Allow-Headers': '*',
		'Access-Control-Allow-Methods': 'POST',
	}
});

http.interceptors.response.use(null, (error) => {
	const expectedError =
		error.response &&
		error.response.status >= 400 &&
		error.response.status < 500;
	if (!expectedError) {
		console.log("Unexpected Error - ", error.message);
		toast.error("Unexpected Error occured");
	}
	return Promise.reject(error);
});
export { http };
