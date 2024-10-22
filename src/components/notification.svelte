<script>
	import close from '/src/images/close.png';
	import { fly } from 'svelte/transition';

	export let message;
	export let show = false;

	function handleClose() {
		show = false;

		const closeEvent = new CustomEvent('close');
		dispatchEvent(closeEvent);
	}

	setTimeout(() => {
		if (show) {
			show = false;
		}
	}, 3000);
</script>

{#if show}
	<div
		in:fly={{ duration: 300, x: 100, opacity: 0 }}
		out:fly={{ duration: 300, x: -100, opacity: 0 }}
		class="text-black bg-[#70FDBB] flex font-bold p-2 z-10 w-auto rounded-r-lg gap-x-[9px]"
	>
		<p class="w-full">{message}</p>
		<button on:click={handleClose}><img class="h-[20px]" src={close} alt="Close" /></button>
	</div>
{/if}
