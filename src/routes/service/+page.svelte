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
	import api from '/src/images/api.svg';
	import sql from '/src/images/sql.svg';
	import frappeErpnext from '/src/images/frappe-erpnext.svg';
</script>

<ServicesBg>
	<div class="absolute top-[110px] h-[calc(100vh-150px)] w-full overflow-hidden">
		<div class="scrollable-container">
			<div class="flex flex-col justify-center items-center">
				<h4 class="font-bold text-[#70F6F8]">SERVICES</h4>
				<h1 class=" text-[25px] lg:text-[35px] font-bold">Look what I do</h1>
			</div>
			<div
				class="flex justify-center grid grid-cols-1 ml-2 lg:grid-cols-4 place-content-evenly mx-[15px]"
			>
				<ServicesContainer
					title="JAVASCRIPT"
					imgSource={javascript}
					about="I bring interactivity and life to websites using the power of JavaScript."
				/>
				<ServicesContainer title="HTML" imgSource={html} about=" Structures web content" />
				<ServicesContainer
					title="BOOTSTRAP"
					imgSource={bootstrap}
					about="Provides responsive design components"
				/>
				<ServicesContainer
					title="GITHUB"
					imgSource={github}
					about="Enables version control and collaboration"
				/>
				<ServicesContainer
					title="PYTHON"
					imgSource={python}
					about="Serves various programming needs"
				/>
				<ServicesContainer
					title="REACT"
					imgSource={react}
					about=" Help build user interfaces efficiently"
				/>
				<ServicesContainer
					title="SVELTE"
					imgSource={bSvelte}
					about=" Help build user interfaces efficiently"
				/>
				<ServicesContainer
					title="TAILWIND"
					imgSource={tailWind}
					about="Offers utility-first styling"
				/>
				<ServicesContainer
					title="WORDPRESS"
					imgSource={wordPress}
					about="System for easy website creation and management"
				/>
				<ServicesContainer
					title="API"
					imgSource={api}
					about="I connect digital experiences by integrating powerful APIs for seamless communication."
				/>
				<ServicesContainer
					title="SQL"
					imgSource={sql}
					about="I bring data to life by crafting dynamic queries and optimizing databases with SQL."
				/>
				<ServicesContainer
					title="Frappe Erpnext"
					imgSource={frappeErpnext}
					about="I build efficient solutions with Frappe ERPNext 15, streamlining business processes effortlessly"
				/>
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
