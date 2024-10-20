<script>
	import Notification from '../../../components/notification.svelte';
	import AboutBg from '../../../components/backgrounds/aboutBG.svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { onMount, onDestroy } from 'svelte';
	import { isAuthenticated } from '$lib/authStore';

	let success = false;
	let message = '';
	let isLoggedIn = false;

	const unsubscribe = isAuthenticated.subscribe((value) => {
		isLoggedIn = value;
	});

	onMount(() => {
		if (!isLoggedIn) {
			goto('/admin/logIn');
			return;
		}
		isAuthenticated.set(true);

		const urlParams = new URLSearchParams(window.location.search);
		if (urlParams.has('login') && urlParams.get('login') === 'success') {
			setTimeout(() => {
				success = true;
			},500)
			message = 'Login successful! Welcome to the dashboard';
		}
	});

	onDestroy(() => {
		unsubscribe();
	});

	async function logout() {
		const { error } = await supabase.auth.signOut();

		if (error) {
			console.error('Error logging out:', error);
			return;
		}
		isAuthenticated.set(false);
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
