<script>
	import PortfolioBg from '../../components/backgrounds/portfolioBG.svelte';
	import Footer from '../../components/footer.svelte';
	import forUpdate from '/src/images/update-unscreen.gif';
	import Button from '../../components/button.svelte';
</script>

<PortfolioBg>
	<div class="absolute top-[180px] lg:top-[150px] w-full h-full p-2 rounded-xl">
		<div class="flex justify-center">
			<img src={forUpdate} alt="for-update" />
		</div>
		<div class="flex justify-center">
			<h1 class="lg:text-[30px] font-bold">This section is for update mate .......</h1>
		</div>
		<div class="flex justify-center text-center">
			<p>I'll shortly be working on several fascinating projects.</p>
		</div>
		<div class="mt-2">
			<a href="/">
				<Button buttonLable="Go Back Home" />
			</a>
		</div>
	</div>
	<Footer />
</PortfolioBg>
