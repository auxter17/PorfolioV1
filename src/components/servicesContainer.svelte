<script>
	export let title;
	export let imgSource;
	export let about;
</script>

<div
	class="service-container hover:scale-110 transition-transform duration-300 w-[340px] border-[#70F6F8] bg-zinc-700 opacity-80 mx-auto my-2 rounded-[15px] flex flex-col"
>
	<div class=" rounded-[10px] flex my-auto p-2 w-full">
		<img
			src={imgSource}
			alt={title + ' Image'}
			class="service-image p-2 w-[100px] bg-white rounded-[10px]"
		/>

		<div class="w-full content-start bg-gray my-auto mx-2">
			<h2 class="font-bold text-[#70F6F8] w-full mt-4 text-leftt">{title}</h2>
			<hr class="rounded my-2 w-full border-[#70FDBB] border-2" />
			<p class="text-left font-bold text-xs">{about}</p>
		</div>
	</div>
</div>

<style>
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
</style>
