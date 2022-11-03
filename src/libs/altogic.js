import { createClient } from 'altogic';

const ENV_URL = import.meta.env.VITE_ALTOGIC_ENV_URL;
const CLIENT_KEY = import.meta.env.VITE_ALTOGIC_CLIENT_KEY;
const API_KEY = import.meta.env.VITE_ALTOGIC_API_KEY;

const altogic = createClient(ENV_URL, CLIENT_KEY, {
	apiKey: API_KEY,
	signInRedirect: '/login',
});

export default altogic;
