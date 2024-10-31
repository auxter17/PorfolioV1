<script>
	import ButtonMenu from './buttonMenu.svelte';
	import Home from '/src/images/home.svg';
	import Profile from '/src/images/user-scan.svg';
	import Contact from '/src/images/phone.svg';
	import Service from '/src/images/heart-handshake.svg';
	import Portfolio from '/src/images/briefcase.svg';

	let menuOpen = false;

	const menus = [
		{ name: 'Home', link: '/', active: '/', icon: Home },
		{ name: 'About Me', link: '/aboutMe', active: 'aboutMe', icon: Profile },
		{ name: 'Services', link: '/service', active: 'service', icon: Service },
		{ name: 'Portfolio', link: '/portfolio', active: 'portfolio', icon: Portfolio },
		{ name: 'Contact Me', link: '/contactMe', active: 'contactMe', icon: Contact }
	];

	function handleMenu(event) {
		menuOpen = event.detail.open;
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<section class="dropdown md:hidden">
	<ButtonMenu open={menuOpen} on:toggle={handleMenu} />
	<div
		id="myDropdown"
		class:show={menuOpen}
		class="dropdown-content bg-zinc-700 justify-start rounded flex flex-col border-2 border-[#70FDBB]"
	>
		{#if menus.length > 0}
			{#each menus as menu}
				<a class="hover:bg-gray-900" on:click={closeMenu} href={menu.link}>
					<div class="flex m-1 gap-x-[10px]">
						<img class="h-[40px]" src={menu.icon} alt="" />
						<h1 class="mt-[6px]">{menu.name}</h1>
					</div>
				</a>
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

	/* .dropdown button {
		cursor: pointer;
	} */
</style>
