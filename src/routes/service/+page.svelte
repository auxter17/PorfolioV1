<script>
	import ServicesBg from '../../components/backgrounds/servicesBG.svelte';
	import Footer from '../../components/footer.svelte';
	import ServicesContainer from '../../components/servicesContainer.svelte';
	import javascript from '/src/images/brand-javascript.png';
	import html from '/src/images/html.png';
	import bootstrap from '/src/images/brand-bootstrap.png';
	import github from '/src/images/brand-github.png';
	import python from '/src/images/brand-python.svg';
	import react from '/src/images/brand-react-native.png';
	import bSvelte from '/src/images/brand-svelte.svg';
	import tailWind from '/src/images/brand-tailwind.png';
	import wordPress from '/src/images/brand-wordpress.svg';
</script>

<ServicesBg>
	<div class="absolute top-[150px] h-[calc(100vh-150px)] w-full overflow-hidden">
		<div class="scrollable-container"> 
			<div class="flex flex-col justify-center items-center ">
				<h4 class="font-bold text-[#70F6F8]">
					SERVICES
				</h4>
				<h1 class="text-[35px] mt-4 font-bold">
					Look what I do
				</h1>
			</div>
			<div class="flex mt-12 justify-center grid grid-cols-4 gap-12 place-content-evenly m-4">
				<ServicesContainer title="JavaScript" imgSource={javascript} about="Adds interactivity" />
				<ServicesContainer title="HTML" imgSource={html} about=" Structures web content" />
				<ServicesContainer title="Bootstrap" imgSource={bootstrap} about="Provides responsive design components" />
				<ServicesContainer title="Github" imgSource={github} about="Enables version control and collaboration" />
				<ServicesContainer title="Python" imgSource={python} about="Serves various programming needs" />
				<ServicesContainer title="React" imgSource={react} about=" Help build user interfaces efficiently" />
				<ServicesContainer title="Svelte" imgSource={bSvelte} about=" Help build user interfaces efficiently" />
				<ServicesContainer title="TailWind" imgSource={tailWind} about="Offers utility-first styling" />
				<ServicesContainer title="Word Press" imgSource={wordPress} about="System for easy website creation and management" />
			</div>
		</div>
	</div>

	<Footer />
</ServicesBg>

<style>
	.scrollable-container {
		height: 100%; 
		width: 100%; 
		overflow-y: auto; 
		overflow-x: hidden; 
		-ms-overflow-style: none; 
		scrollbar-width: none; 
	}

	.scrollable-container::-webkit-scrollbar {
		display: none;
	}
</style>
