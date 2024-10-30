<script>
	import aboutBg from '/src/components/backgrounds/bg-images/Web - About Me.svg';
</script>

<div class="relative w-screen h-screen overflow-hidden">
	<div class="absolute inset-0 z-[-1]">
		<img src={aboutBg} alt="About background" class="w-full h-full object-cover" />
	</div>
	<slot />
</div>
