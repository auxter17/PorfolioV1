<script>
	import menuIcon from '/src/images/menu-2.svg';
	import closeIcon from '/src/images/closesvg.svg';

	let menuOpen = true;
	function handleMenu() {
		menuOpen = !menuOpen;
	}
	const menus = [
		{ name: 'Home', link: '/', active: '/' },
		{ name: 'About Me', link: '/aboutMe', active: 'aboutMe' },
		{ name: 'Services', link: '/service', active: 'service' },
		{ name: 'Portfolio', link: '/portfolio', active: 'portfolio' },
		{ name: 'Contact Me', link: '/contactMe', active: 'contactMe' }
	];
</script>

<section class="dropdown md:hidden">
	<button
		class="border-2 m-2 hover:bg-gray-900 rounded flex ml-[65px] border-[#70FDBB] bg-zinc-700 p-2"
		on:click={handleMenu}
	>
		{#if menuOpen}
			<img
				class="w-[35px] transition-transform duration-500"
				src={closeIcon}
				alt="close"
				style="transform: rotate(0deg);"
			/>
		{:else}
			<img
				class="w-[35px] transition-transform duration-500"
				src={menuIcon}
				alt="menu"
				style="transform: rotate(180deg);"
			/>
		{/if}
	</button>

	<div
		id="myDropdown"
		class:show={menuOpen}
		class="dropdown-content mr-2 bg-zinc-700 justify-start rounded flex flex-col border-2 border-[#70FDBB]"
	>
		{#if menus.length > 0}
			{#each menus as menu}
				<a class="text-white hover:bg-gray-900" href={menu.link}>{menu.name}</a>
			{/each}
		{/if}
	</div>
</section>

<style>
	.dropdown-content {
		display: none;
		flex-direction: column;
		z-index: 1;
	}
	.show {
		display: flex;
	}
	.dropdown-content a {
		padding: 8px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown button {
		cursor: pointer;
	}
</style>
