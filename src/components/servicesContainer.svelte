<script>
	export let title;
	export let imgSource;
    export let about;
</script>

<div class="service-container rounded-[15px] p-8 border-4 border-[#70F6F8] flex flex-col items-center">
	<img
		src={imgSource}
		alt={title + ' Image'}
		class="service-image pulse p-2 bg-white rounded-[15px]"
	/>
	<h2 class="font-bold text-[#70F6F8] mt-4 text-center">{title}</h2>
    <div class="flex justify-center w-full"> <!-- Added w-full here -->
        <p class="text-center">{about}</p> <!-- Added text-center class here -->
    </div>
</div>

<style>
	.service-container {
		width: 200px; /* Fixed width */
		height: 300px; /* Fixed height */
		margin: auto;
	}

	.service-image {
		width: 100px;
		height: auto;
	}

	@keyframes pulse {
		0% {
			transform: scale(1);
		}
		50% {
			transform: scale(1.1);
		}
		100% {
			transform: scale(1);
		}
	}

	.pulse {
		animation: pulse 1.5s infinite; 
	}

	.text-center { /* Center align the text */
		text-align: center; /* Center align the text */
	}
</style>
