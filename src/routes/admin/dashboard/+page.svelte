<script>
	import AboutBg from '../../../components/backgrounds/aboutBG.svelte';
	import { goto } from '$app/navigation';
	import { supabase } from '$lib/supabaseClient';
	import { onMount } from 'svelte';
	import Notification from '../../../components/notification.svelte';
	import { sequence } from '@sveltejs/kit/hooks';

	let success = false;
	let message = '';

	function closeNotification() {
		success = false;
	}

	
	onMount(async () => {
		const { data: { session }, error } = await supabase.auth.getSession();

		if (error || !session) {
			goto('/admin/logIn');
			return;
		}

		const urlParams = new URLSearchParams(window.location.search);

		if (urlParams.has('login') && urlParams.get('login') === 'success') {
			success = true;
			message = 'Login successful! Welcome to the dashboard.';
			console.log(session)

			setTimeout(() => {
				closeNotification();
			}, 2000); 
		} else {
			console.log('Condition not met for showing notification');
		}
	});
</script>

<AboutBg>
	{#if success}
		<h1>hi</h1>
		<!-- Passing the message and close handler to Notification component -->
		<Notification {message} on:close={closeNotification} />
	{/if}
	<div>hq</div>
</AboutBg>
