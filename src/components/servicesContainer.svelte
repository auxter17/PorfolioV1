<script>
	export let title;
	export let imgSource;
	export let about;
</script>

<div class="service-container rounded-[15px] m-2 lg:mx-[90px] p-2 p-8 flex flex-col items-center">
	<div class="border-2 rounded-[10px] p-4 w-[125px] border-[#70F6F8]">
		<img
			src={imgSource}
			alt={title + ' Image'}
			class="service-image pulse p-2 bg-white rounded-[10px]"
		/>
	</div>
	<h2 class="font-bold text-[#70F6F8] mt-4 text-center">{title}</h2>
	<div class="flex justify-center w-full">
		<p class="text-center text-xs">{about}</p>
	</div>
</div>

<style>
	.service-container {
		width: 150px;
		height: 250px;
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

	.text-center {
		text-align: center;
	}
</style>
