<script>
	import PortfolioBg from '../../components/backgrounds/portfolioBG.svelte';
	import Footer from '../../components/footer.svelte';
	import forUpdate from '/src/images/update-unscreen.gif';
</script>

<PortfolioBg>
	<div
		class="absolute top-[120px] lg:top-[150px] mx-[30px] lg:mx-[250px] w-[40vh] lg:w-[70vw] p-2 rounded-xl"
	>
		<div class="flex justify-center">
			<img src={forUpdate} alt="for-update" />
		</div>
		<div class="flex justify-center">
			<h1 class="lg:text-[30px] font-bold">This section is for update mate .......</h1>
		</div>
		<div class="flex justify-center text-center">
			<p>I'll shortly be working on several fascinating projects.</p>
		</div>
	</div>
	<Footer />
</PortfolioBg>
