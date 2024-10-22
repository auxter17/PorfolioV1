import { browser } from '$app/environment';
import { redirect } from '@sveltejs/kit';
import Cookies from 'js-cookie';

export async function load() {
	const accessToken = Cookies.get('access_token');
	const refreshToken = Cookies.get('refresh_token');

	if (!accessToken && browser) {
		await new Promise((resolve) => setTimeout(resolve, 100));
		throw redirect(302, '/admin/logIn');
	}

	return {
		status: 302,
		props: {
			accessToken,
			refreshToken
		}
	};
}
