import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params, fetch }) {
	const res = await fetch(`https://www.omdbapi.com/?apikey=11aa9d2f&i=${params.id}`);
	const data = await res.json();
	return data;

	throw error(404, 'Not found');
}
