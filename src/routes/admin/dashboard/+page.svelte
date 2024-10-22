<script>
	export let session;
	console.log(session);
	import Notification from '../../../components/notification.svelte';
	import AboutBg from '../../../components/backgrounds/aboutBG.svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import Cookies from 'js-cookie';

	let success = false;
	let message = '';

	onMount(async () => {
		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('login') && urlParams.get('login') === 'success') {
			setTimeout(() => {
				success = true;
			}, 500);
			message = 'Login successful! Welcome to the dashboard';
		}
	});

	async function logout() {
		const { error } = await supabase.auth.signOut();
		Cookies.remove('access_token', { path: '/' });
		Cookies.remove('refresh_token', { path: '/' });
		localStorage.removeItem('session');
		localStorage.removeItem('access_token');
		localStorage.removeItem('supabaseAccessToken');

		if (error) {
			console.error('Error logging out:', error);
			return;
		}
		goto('/admin/logIn');
	}
</script>

<AboutBg>
	<div class="absolute top-[120px] z-10">
		{#if success}
			<Notification show={true} {message} />
		{/if}
		<button on:click={logout}>hi</button>
		<div>hq</div>
	</div>
</AboutBg>
