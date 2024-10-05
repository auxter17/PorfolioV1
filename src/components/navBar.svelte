<script>
	import { slide, fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	let active = '';
	let show = true;

	/**
	 * @param {string} link
	 */
	function setActive(link) {
		active = link;
	}

	function handleClick() {
		console.log(window.location.href);
		show = false;

		setTimeout(() => {
			show = true;
		}, 1000);
	}
</script>

<div class="absolute z-10 w-full font-bold">
	<nav class="flex justify-between p-8">
		<ul class="flex m-0 justify-start">
			<li>
				<a on:click={handleClick} transition:slide class="hover:border-white" href="/">
					{#if show}
						<img
							transition:fly={{ x: -200 }}
							class="bg-white rounded-full"
							src="src/images/icon.png"
							alt=""
						/>
					{/if}
				</a>
			</li>
		</ul>
		<ul class="flex gap-x-16 px-12 py-4 m-0 justify-end">
			<li>
				<a
					href="/"
					on:click={() => setActive('/')}
					class="hover:underline hover:underline-offset-8 cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'/'
						? 'text-[#70FDBB]'
						: ''}">Home</a
				>
			</li>
			<li>
				<a
					href="/aboutMe"
					on:click={() => setActive('aboutMe')}
					class="hover:underline hover:underline-offset-8 cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'aboutMe'
						? 'text-[#70FDBB]'
						: ''}">About Me</a
				>
			</li>
			<li>
				<a
					href="/service"
					on:click={() => setActive('service')}
					class="hover:underline hover:underline-offset-8 cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'service'
						? 'text-[#70FDBB]'
						: ''}">Services</a
				>
			</li>
			<li>
				<a
					href="/portfolio"
					on:click={() => setActive('portfolio')}
					class="hover:underline hover:underline-offset-8 cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'portfolio'
						? 'text-[#70FDBB]'
						: ''}"
				>
					Portfolio
				</a>
			</li>
			<li>
				<a
					class="bg-zinc-700 p-4 hover:bg-gray-900 rounded-full border-2 border-[#70FDBB]"
					href="/contactMe">Contact Me</a
				>
			</li>
		</ul>
	</nav>
</div>