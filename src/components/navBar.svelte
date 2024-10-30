<script>
	import { slide, fly } from 'svelte/transition';
	import miniIcon from '/src/images/icon.png';
	import LoadingMain from './loadingscreens/loadingMain.svelte';
	import Menu from './menu.svelte';

	let active = '';
	let show = true;

	const menus = [
		{ name: 'Home', link: '/', active: '/' },
		{ name: 'About Me', link: '/aboutMe', active: 'aboutMe' },
		{ name: 'Services', link: '/service', active: 'service' },
		{ name: 'Portfolio', link: '/portfolio', active: 'portfolio' }
	];

	function setActive(name) {
		active = name;
	}

	function handleClick() {
		console.log(window.location.href);
		show = false;

		setTimeout(() => {
			show = true;
		}, 1000);
	}
</script>

<LoadingMain />

<div class="fixed z-20 w-full font-bold">
	<nav class="flex justify-between p-8">
		<ul class="flex m-0 justify-start">
			<li>
				<a on:click={handleClick} transition:slide class="hover:border-white" href="/">
					{#if show}
						<img
							transition:fly={{ x: -200 }}
							class="bg-white rounded-full"
							src={miniIcon}
							alt="Mini Icon"
						/>
					{/if}
				</a>
			</li>
		</ul>
		<ul class="hidden md:flex gap-x-16 px-12 py-4 m-0 justify-end">
			{#if menus.length > 0}
				{#each menus as menu}
					<li>
						<a
							href={menu.link}
							on:click={() => setActive(menu.active)}
							class="hover:underline hover:underline-offset-8 cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
							menu.active
								? 'text-[#70FDBB]'
								: ''}"
						>
							{menu.name}
						</a>
					</li>
				{/each}
			{/if}
			<li>
				<a
					href="/contactMe"
					on:click={() => setActive('contactMe')}
					class="bg-zinc-700 p-4 hover:bg-gray-900 rounded-full border-2 border-[#70FDBB] {active ===
					'/contactMe'
						? 'text-[#70FDBB]'
						: ''}">Contact Me</a
				>
			</li>
		</ul>
		<Menu />
	</nav>
</div>

