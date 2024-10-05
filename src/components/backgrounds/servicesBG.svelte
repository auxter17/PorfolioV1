<script>
	import servicesBg from '/src/components/backgrounds/bg-images/Web - Services.png'
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<div class="absolute inset-0 z-[-1]">
		<img
			src={servicesBg}
			alt="service-background"
			class="w-full h-full object-fill"
		/>
	</div>
	<slot />
</div>
