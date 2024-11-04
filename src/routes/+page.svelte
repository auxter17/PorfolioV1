<script>
	import HomeBg from '../components/backgrounds/homeBG.svelte';
	import Footer from '../components/footer.svelte';
	import rightArrow from '/src/images/arrow-right.png';
	import mainIcon from '/src/images/main-icon.png';

	let active = '';

	/**
	 * @param {string} link
	 */

	function setActive(link) {
		active = link;
	}
</script>

<HomeBg>
	<div class="absolute z-10 top-[100px] left-0 lg:left-20 md:left-2 h-100vh w-100vh">
		<div class="m-0 p-0">
			<div class="flex justify-center lg:p-10 p-8">
				<div class=" w-[190px] h-[200px] lg:w-[290px] lg:h-[290px] rounded-full bg-white border">
					<img class="h-full w-full" src={mainIcon} alt="main-icon" />
				</div>
			</div>
			<div class="pl-2 mx-[60px] lg:mx-0 lg:px-[200px] m-0 p-0">
				<div
					class="flex bg-[#4A6B61] font-bold text-[#3D5A54] bg-gray-900 w-[130px] lg:w-[160px] px-[10px] my-2 py-[4px] rounded-full"
				>
					<iframe
						src="https://giphy.com/embed/hDSGolpaNZTK9OQJqk"
						width="30"
						height="30"
						style="padding: 0; margin: 0; border: 0; pointer-events: cursor;"
						frameBorder="0"
						class="giphy-embed"
						id="my-iframe-id"
						title="Wave"
					></iframe>
					<h1 class="py-[4px] text-sm lg:text-md text-white">Hello! I'm</h1>
				</div>
				<h1 class=" p-0 m-0 font-extrabold mt-[-12px] text-[40px] lg:text-[50px] font-sans">
					ANGELO AUXTERO
				</h1>
				<div class="flex gap-x-1 mt-[-2px]">
					<h1 class="p-0 text-sm lg:text-md m-0 font-bold">Web</h1>
					<h1 class="p-0 text-sm lg:text-md m-0 text-[#70F6F8] font-bold">Developer .</h1>
				</div>
				<a
					href="/portfolio"
					on:click={() => setActive('/portfolio')}
					class="cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'/portfolio'
						? 'text-[#70FDBB]'
						: ''}"
				>
					<button
						class="font-bold border bg-[#70F6F8] text-black flex w-[170px] lg:w-[200px] gap-x-2 border-black my-2 py-2 px-4 rounded-full shadow-lg shadow-[#70F6F8]"
					>
						<h5 class="py-2 text-[13px] lg:text-md">See My Projects</h5>
						<img src={rightArrow} alt="Arrow right" class="w-8 h-8 my-auto" />
					</button>
				</a>
			</div>
		</div>
	</div>

	<Footer />
</HomeBg>
