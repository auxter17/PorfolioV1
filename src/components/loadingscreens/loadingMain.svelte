<script>
	import { loading } from '$lib/loading';
	import { navigating } from '$app/stores';
	import load from '/src/images/hourglass.gif';

	$: $loading = !!$navigating;
</script>

{#if $loading}
	<div class="w-full absolute z-20 h-full bg-zinc-600 bg-opacity-50">
		<div
			class="bg-white p-2 border my-[150px] mx-auto rounded-xl w-[90%] lg:h-[70%] lg:w-[50vw] text-black"
		>
			<div class="flex justify-center mt-[20px] lg:mt-[80px]">
				<img class=" h-[250px] lg:h-[300px]" src={load} alt="loading" />
			</div>
			<div class="flex justify-center">
				<div class="flex justify-center pb-[20px] items-center">
					<h1 class="font-bold text-[30px]">LOADING</h1>
					<span class="dot animate-ping">.</span>
					<span class="dot animate-ping delay-75">.</span>
					<span class="dot animate-ping delay-150">.</span>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	.dot {
		font-size: 30px;
		animation: fade 1s infinite;
		opacity: 0;
	}

	@keyframes fade {
		0% {
			opacity: 0;
		}
		20% {
			opacity: 1;
		}
		80% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}

	.dot:nth-child(2) {
		animation-delay: 0.5s;
	}

	.dot:nth-child(3) {
		animation-delay: 1s;
	}
</style>
