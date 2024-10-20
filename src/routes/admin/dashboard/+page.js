import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

/**
 *
 * @param {number} ms
 */
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function load() {
	const {
		data: { session },
		error: sessionError
	} = await supabase.auth.getSession();

	if (sessionError || !session) {
		throw redirect(302, '/admin/logIn');
	}

	const { data: countries, error: countriesError } = await supabase.from('countries').select();

	await sleep(2000);

	if (countriesError) {
		console.error('Error fetching countries:', countriesError);
		return {
			status: 500,
			countries: [],
			session,
			error: 'Failed to fetch countries'
		};
	}

	return {
		status: 200,
		countries: countries ?? [],
		session
	};
}
