<script>
	import { page } from '$app/stores';
	import HomeBg from '../components/backgrounds/homeBG.svelte';
	import empty from '/src/images/svg/404.svg';
</script>

<HomeBg>
	{#if $page.status === 404}
		<div class="error absolute z-10 top-[150px] grid place-items-center w-full">
			<div
				class="bg-zinc-700 grid place-items-center opacity-80 w-full max-w-[80%] p-[25px] rounded"
			>
				<img src={empty} alt="404" class="lg:w-[20%] md:w-[20%] w-[40%] p-0 m-0" />
				<div class="text-center m-0 p-0">
					<h1 class="text-[70px] font-bold text-[#70FDBB]">404</h1>
					<h1 class="text-[30px] font-bold">You Got Lost!</h1>
					<hr class="rounded w-full border-[#70FDBB] border-2" />
					<h1 class="text-[30px] font-bold">There's Nothing here</h1>
					<a
						class="my-2 bg-[#70F6F8] text-black flex w-[170px] font-bold border-black rounded-full hover:shadow-md hover:shadow-[#70F6F8] justify-center items-center mx-auto"
						href="/">Back To Home</a
					>
					<p>Page {$page.error.message}</p>
				</div>
			</div>
		</div>
	{:else if $page.status === 500}
		<div class="error">
			<h1>500</h1>
			<h1>Internal Server Error</h1>
			<p>{$page.error.message}</p>
		</div>
	{/if}
</HomeBg>
