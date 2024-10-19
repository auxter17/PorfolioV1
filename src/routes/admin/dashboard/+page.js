import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';

/**
 * Sleep function to simulate delay (if needed)
 * @param {number} ms - Time in milliseconds
 */
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function load() {
	// Get the current session
	const { data: { session }, error: sessionError } = await supabase.auth.getSession();

	if (sessionError || !session) {
		// Redirect to login page if there is no session
		throw redirect(302, '/admin/logIn');
	}

	// Fetch data from the countries table
	const { data: countries, error: countriesError } = await supabase.from('countries').select();

	// Add an artificial delay if needed (for loading simulations)
	await sleep(2000);

	if (countriesError) {
		console.error('Error fetching countries:', countriesError);
		// Optionally throw an error or return an empty array if data fetching fails
		return {
			status: 500,
			countries: [],
			session,
			error: 'Failed to fetch countries'
		};
	}

	// Return data to the component
	return {
		status: 200,
		countries: countries ?? [],
		session
	};
}
