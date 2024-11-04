<script>
	import contactBg from '/src/components/backgrounds/bg-images/Web - Contact Me.svg';
</script>

<div class="relative w-screen h-[100vh] overflow-hidden">
	<div class="absolute inset-0 z-[-1]">
		<img src={contactBg} alt="" class="w-full h-full object-cover" />
		<h1>awda</h1>
	</div>
	<slot />
</div>
