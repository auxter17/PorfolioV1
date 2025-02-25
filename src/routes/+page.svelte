<script>
	import HomeBg from '../components/backgrounds/homeBG.svelte';
	import Footer from '../components/footer.svelte';
	import rightArrow from '/src/images/arrow-right.png';
	import mainIcon from '/src/images/main-icon.png';
	import cloudSearch from '/src/images/svg/cloud-search.svg';
	import search from '/src/images/svg/search.svg';
	import sunny from '/src/images/svg/sunny.svg';
	import thunderStorm from '/src/images/svg/thunderstorm.svg';
	import clouds from '/src/images/svg/clouds.svg';
	import drizzle from '/src/images/svg/drizzle.svg';
	import rain from '/src/images/svg/rain.svg';
	import snow from '/src/images/svg/snow.svg';
	import cloudFog from '/src/images/svg/cloud-fog.svg';

	let active = '';

	/**
	 * @param {string} link
	 */

	function setActive(link) {
		active = link;
	}

	let city = '';
	let weatherResult = '';
	let error = null;
	let indicator = '';
	const getWeather = async () => {
		if (!city) {
			error = 'Please enter a city name.';
			return;
		}

		try {
			const response = await fetch(`/weather?city=${city}`);
			const data = await response.json();

			const weatherIconMapping = {
				Clouds: clouds,
				Thunderstorm: thunderStorm,
				Drizzle: drizzle,
				Rain: rain,
				Snow: snow,
				Clear: sunny,
				Atmosphere: cloudFog
			};

			if (data.error) {
				error = data.error;
				weatherResult = null;
			} else {
				weatherResult = data;

				indicator = weatherIconMapping[weatherResult.main] || sunny; // Default to sunny if no match

				error = null;
			}
		} catch (e) {
			error = e;
			weatherResult = null;
		}
	};
</script>

<HomeBg>
	<div
		class="absolute z-10 top-[130px] lg:flex overflow-y-auto justify-center gap-x-[10px] no-scrollbar w-full h-[calc(100vh-130px)]"
	>
		<div class="m-0 p-0 lg:mt-0 mt-[10%] mb-2">
			<div class="flex justify-center lg:mb-0 mb-[50px]">
				<div class=" w-[190px] h-[200px] lg:w-[290px] lg:h-[290px] rounded-full bg-white border">
					<img class="h-full w-full" src={mainIcon} alt="main-icon" />
				</div>
			</div>
			<div class="pl-2 mx-[30px] lg:mx-0 lg:px-[120px] m-0 p-0">
				<div
					class="flex bg-[#4A6B61] font-bold text-[#3D5A54] bg-gray-900 w-[130px] lg:w-[130px] px-[10px] rounded-full"
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
				<h1 class=" p-0 -mb-[15px] font-extrabold text-[25px] lg:text-[50px] font-sans">GELO</h1>

				<div class="flex gap-x-1 uppercase">
					<h1 class="p-0 text-[35px] lg:text-md m-0 font-bold">Web</h1>
					<h1 class="p-0 text-[35px] lg:text-md m-0 text-[#70F6F8] font-bold">Developer</h1>
				</div>
				<hr class="rounded w-full border-[#70FDBB] border-2" />
				<p class="max-w-[500px] my-2 text-[15px]">
					"Hey, what's up! I'm Angelo Auxtero, your friendly neighborhood developer. Ensuring
					seamless and efficient online experiences."
				</p>
				<p class="max-w-[500px] font-bold text-[15px] my-2">
					Feel free to click on 'See My Projects' to view my work.
				</p>

				<a
					href="/portfolio"
					on:click={() => setActive('/portfolio')}
					class="cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
					'/portfolio'
						? 'text-[#70FDBB]'
						: ''}"
				>
					<button
						class="font-bold w-full h-full flex items-center justify-center bg-[#70F6F8] text-black flex w-[170px] lg:w-[200px] gap-x-2 rounded-full shadow-lg shadow-[#70F6F8]"
					>
						<h5 class="py-2 text-[13px] lg:text-md">See My Projects</h5>
						<img src={rightArrow} alt="Arrow right" class="w-8 h-8 my-auto" />
					</button>
				</a>
			</div>
			<div class="relative lg:hidden mt-[90px]">
				<hr class="border-[#70FDBB]" />
				<span
					class="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black px-8 rounded text-gray-400"
					>Discover More</span
				>
			</div>
		</div>
		<div class="right-content mt-[30%] lg:mt-0 lg:m-0 m-8">
			<div class="flex text-[40px] animate-bounce w-full justify-center">
				<h1>🌤️</h1>
				<h1
					class="flex text-[36px] font-bold justify-center bg-gradient-to-r from-blue-400 via-teal-400 to-blue-600 bg-clip-text text-transparent drop-shadow-lg"
				>
					Weather Buddy
				</h1>
			</div>
			<div class="content p-8 w-full bg-zinc-700 opacity-80 rounded-lg shadow-lg">
				<h5 class="text-2xl font-semibold text-white mb-4">Need to check the weather somewhere?</h5>

				<div class="search flex items-center border rounded-lg border-[#70FDBB] border-2 mb-6">
					<input
						bind:value={city}
						class="p-2 w-full bg-transparent rounded-l-lg focus:outline-none"
						placeholder="City or Province"
						type="text"
					/>
					<button
						on:click={getWeather}
						class="p-2 text-white rounded-r-lg hover:bg-[#70F6F8] focus:outline-none"
					>
						<img src={search} alt="Search" />
					</button>
				</div>

				<div class="result">
					{#if !weatherResult}
						<div class="w-full my-2 flex items-center justify-center">
							<div class="text-center">
								<img src={cloudSearch} alt="cloudSearch" class="w-[200px] h-[200px] mx-auto" />
								<h5 class="text-lg font-bold my-5">Wan't to get full detailed results?</h5>
								<hr class="rounded w-full border-[#70FDBB] border-2" />
								<a
									href="/portfolio"
									on:click={() => setActive('/portfolio')}
									class="cursor-pointer hover:text-[#70FDBB] transition duration-900 {active ===
									'/portfolio'
										? 'text-[#70FDBB]'
										: ''}"
								>
									<button
										class=" my-2 bg-[#70F6F8] text-black flex w-[170px] lg:w-[200px] gap-x-2 border-black rounded-full shadow-lg shadow-[#70F6F8] justify-center items-center mx-auto"
									>
										<h5 class="text-[13px] lg:text-lg">Click here</h5>
									</button>
								</a>
							</div>
						</div>
					{:else if weatherResult}
						<div class="w-full h-full flex items-center justify-center flex-col">
							<h3 class="text-xl font-bold mb-2">Weather in {weatherResult.name}</h3>
							<img src={indicator} alt="Weather Icon" class="h-[120px] w-[120px]" />
							<p class="mb-2 text-[#70FDBB] text-[50px]">{weatherResult.temp}°C</p>
							<p class="mb-2 text-[20px]">{weatherResult.description}</p>
							<hr class="rounded w-full border-[#70FDBB] border-2" />
							<div class="flex justify-center">
								<p class="m-2">humidity {weatherResult.humidity}%</p>
								<p class="m-2">wind {weatherResult.wind} m/s</p>
							</div>
						</div>
					{:else if error}
						<p class="text-red-500">{error}</p>
					{/if}
				</div>
			</div>
		</div>
		<div class="block lg:hidden">
			<Footer />
		</div>
	</div>
	<div class="lg:block hidden">
		<Footer />
	</div>
</HomeBg>
