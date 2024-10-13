<script>
	import PortfolioBg from '../../components/backgrounds/portfolioBG.svelte';
	import Footer from '../../components/footer.svelte';
	import forUpdate from '/src/images/update-unscreen.gif';
</script>

<PortfolioBg>
	<div class="absolute top-[160px] mx-[250px] w-[70vw] p-8 rounded-xl">
		<div class="flex justify-center">
			<img src={forUpdate} alt="for-update" />
		</div>
		<div class="flex justify-center">
			<h1 class="text-[30px] font-bold">This section is for update mate .......</h1>
		</div>
		<div class="flex justify-center">
			<p>I'll shortly be working on several fascinating projects.</p>
		</div>
	</div>
	<Footer />
</PortfolioBg>
