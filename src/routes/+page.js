import { error } from '@sveltejs/kit';
/**
 * @param {number} ms
 */
function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function load() {
	await sleep(2000);
	const pageExists = true;
	if (!pageExists) {
		throw error(404, 'Page Not Found');
	}

	return {
		status: 200
	};
}
