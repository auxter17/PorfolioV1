import { writable } from 'svelte/store';
import { supabase } from '$lib/supabaseClient';

export const isAuthenticated = writable(false);

const checkSession = async () => {
	const {
		data: { session }
	} = await supabase.auth.getSession();
	isAuthenticated.set(!!session);
};

checkSession();

supabase.auth.onAuthStateChange((event, session) => {
	isAuthenticated.set(!!session);
});
