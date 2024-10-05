<script>
	import portfolioBg from "/src/components/backgrounds/bg-images/Web - Portfolio.png"
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<div class="absolute inset-0 z-[-1]">
		<img
			src={portfolioBg}
			alt=""
			class="w-full h-full object-fill"
		/>
	</div>
	<slot />
</div>
