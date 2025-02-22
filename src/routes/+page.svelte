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
	<div class="absolute z-10 top-[150px] left-0 lg:left-20 md:left-2 h-100vh w-100vh flex">
		<div class="m-0 p-0">
			<div class="flex justify-center lg:p-5 p-8">
				<div class=" w-[190px] h-[200px] lg:w-[290px] lg:h-[290px] rounded-full bg-white border">
					<img class="h-full w-full" src={mainIcon} alt="main-icon" />
				</div>
			</div>
			<div class="pl-2 mx-[60px] lg:mx-0 lg:px-[120px] m-0 p-0">
				<div
					class="flex bg-[#4A6B61] font-bold text-[#3D5A54] bg-gray-900 w-[130px] lg:w-[130px] px-[10px] my-2 py-[4px] rounded-full"
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
						class="font-bold w-full h-full flex items-center justify-center bg-[#70F6F8] text-black flex w-[170px] lg:w-[200px] gap-x-2 rounded-full shadow-lg shadow-[#70F6F8]"
					>
						<h5 class="py-2 text-[13px] lg:text-md">See My Projects</h5>
						<img src={rightArrow} alt="Arrow right" class="w-8 h-8 my-auto" />
					</button>
				</a>
			</div>
		</div>
		<div class="right-content">
			<div class="content m-0 p-8 w-full h-full bg-zinc-700 opacity-80 rounded-lg shadow-lg">
				<h5 class="text-2xl font-semibold text-white mb-4">
					Wan'na check a weather in a certain area?
				</h5>

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
						<div class="w-full h-full flex items-center justify-center">
							<div class="text-center">
								<img src={cloudSearch} alt="cloudSearch" class="w-[200px] h-[200px] mx-auto" />
								<h5 class="text-lg font-bold my-5">Want to get full detailed results?</h5>
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
								<p class="m-2"> humidity {weatherResult.humidity}%</p>
								<p class="m-2"> wind {weatherResult.wind} m/s</p>
							</div>
						</div>
					{:else if error}
						<p class="text-red-500">{error}</p>
					{/if}
				</div>
			</div>
		</div>
	</div>

	<Footer />
</HomeBg>
