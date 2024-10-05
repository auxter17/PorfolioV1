<script lang="ts">
	import '../app.css';
	import NavBar from '../components/navBar.svelte';
	import LoadingMain from '../components/loadingscreens/loadingMain.svelte';
	import { onMount } from 'svelte';

	let loading = false;

	onMount(() => {
		loading = true;
	});
</script>

{#if !loading}
	<LoadingMain />
{/if}
<NavBar />

<slot />
