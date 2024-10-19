<script>
	export let message;

	// Dispatch close event when the notification is closed
	function handleClose() {
		const closeEvent = new CustomEvent('close');
		dispatchEvent(closeEvent);
	}
</script>

<div class="notification">
	<p>{message}</p>
	<button on:click={handleClose}>Close</button>
</div>

<style>
	.notification {
		/* Notification styles */
		background-color: lightgreen;
		padding: 10px;
		border-radius: 5px;
	}
</style>
