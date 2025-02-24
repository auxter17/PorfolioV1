<script>
	import ServicesBg from '../../components/backgrounds/servicesBG.svelte';
	import Footer from '../../components/footer.svelte';
	import ServicesContainer from '../../components/servicesContainer.svelte';
	import javascript from '/src/images/svg/javascript.svg';
	import html from '/src/images/svg/html.svg';
	import bootstrap from '/src/images/svg/bootstrap.svg';
	import github from '/src/images/svg/github.svg';
	import python from '/src/images/svg/python.svg';
	import react from '/src/images/svg/react.svg';
	import bSvelte from '/src/images/svg/svelte.svg';
	import tailWind from '/src/images/svg/tailwind.svg';
	import wordPress from '/src/images/svg/wordpress.svg';
	import api from '/src/images/svg/api.svg';
	import sql from '/src/images/svg/sql.svg';
	import frappeErpnext from '/src/images/svg/frappe-erpnext.svg';
</script>

<ServicesBg>
	<div class="absolute top-[120px] h-[calc(100vh-150px)] w-full overflow-hidden">
		<div class="scrollable-container">
			<div class="flex flex-col justify-center items-center">
				<p class="font-bold text-[30px] text-[#70F6F8]">SKILL SET'S</p>
				<hr class="rounded my-2 w-[50%] border-[#70FDBB] border-2" />
				<p>Look what I can do!</p>
			</div>
			<div
				class="flex mt-[40px] justify-center grid grid-cols-1 ml-2 lg:grid-cols-4 place-content-evenly mx-[15px]"
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
