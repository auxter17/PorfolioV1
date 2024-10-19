import { supabase } from '$lib/supabaseClient';

/**
 * @param {number} ms
 */

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function load() {
	const { data } = await supabase.from('countries').select();
	await sleep(2000);

	return {
		status: 200,
		countries: data ?? []
	};
}
