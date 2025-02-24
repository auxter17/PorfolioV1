<script>
	import PortfolioBg from '../../components/backgrounds/portfolioBG.svelte';
	import Footer from '../../components/footer.svelte';
	import miniIcon from '/src/images/icon.png';
	import sunny from '/src/images/svg/sunny.svg';
	import clouds from '/src/images/svg/clouds.svg';
	import rain from '/src/images/svg/rain.svg';

	const images = [rain, clouds, sunny];

	let currentIndex = 0;

	const changeImage = () => {
		currentIndex = (currentIndex + 1) % images.length;
	};

	// Change image every 3 seconds
	setInterval(changeImage, 3000);
</script>

<PortfolioBg>
	<div class="absolute top-[10px] w-full h-full rounded-xl flex justify-center items-center">
		<div class="w-full md:w-[35%] m-2 max-h-[45%] rounded-[30px] p-4 bg-zinc-700 opacity-80">
			<div class="w-full flex justify-between">
				<p class="text-[10px] uppercase font-bold">OWN BY: Gelo</p>
				<img class="bg-white ml-0 w-[35px] rounded-full" src={miniIcon} alt="Mini Icon" />
			</div>
			<div class="w-full h-full flex justify-center">
				<img class="flex w-[100px]" src={images[currentIndex]} alt="weatherImage" />
			</div>
			<h5 class="text-[25px] text-[#70FDBB] font-bold uppercase">WeatherBuddy</h5>
			<p class="text-[10px]">
				Get weather updates anywhere and everywhere with real-time information about the weather in
				any location. Stay informed about temperature, humidity, wind speed, and precipitation, no
				matter where you are. Whether you’re planning your day, traveling, or just curious about the
				weather in another city, real-time updates keep you prepared and safe.
			</p>
			<hr class="rounded w-full border-[#70FDBB] border-2" />
			<a class="w-full flex justify-center py-2 font-bold text-[15px]" href="/weather">GO TO PAGE</a
			>
		</div>
	</div>
	<Footer />
</PortfolioBg>
