<script>
	import AboutBg from '../../components/backgrounds/aboutBG.svelte';
	import Footer from '../../components/footer.svelte';
	import aboutIcon from '/src/images/image 4.png';
</script>

<AboutBg>
	<div
		class="m-[40px] overflow-y-auto absolute lg:left-20 top-[100px] lg:w-[90%] h-[70%] lg:h-[70%] flex rounded-lg bg-gradient-to-r from-[#70FDBB4D] from-[10%] to-transparent to-[80%]"
	>
		<div class="w-full p-7 lg:p-14">
			<h1 class="font-bold text-[#70F6F8]">ABOUT ME</h1>
			<div class="h-[calc(100vh-370px)] lg:h-auto no-scrollbar overflow-y-auto">
				<p class="text-bold py-10">
					I'm an enthusiastic web developer that adores turning creative concepts into engaging web
					sites. Having a background in HTML, CSS, and JavaScript, my area of expertise is developing
					user-friendly, responsive websites that look spectacular and work seamlessly on all
					platforms. My keen interest in coding first began my adventure, which took me to investigate
					several frameworks and libraries like Svelte, React and Bootstrap. To enable achieve
					designers' and stakeholders' ambitions, I like working with them to make sure every project
					complies with current standards and best practices. Beyond development, I'm constantly keen
					to learn about new trends and technologies in an effort to improve my abilities and provide
					solutions of the highest caliber.
				</p>
			</div>
			<a href="./contactMe">
				<button
					class="font-bold border bg-[#70F6F8] text-black flex w-[200px] gap-x-2 my-6 py-2 px-4 rounded-full shadow-[0_0_10px_2px_#70F6F8] hover:shadow-none"
				>
					Let's Work Together
				</button>
			</a>
		</div>
		<div class="w-full hidden md:flex lg:flex justify-center">
			<img class="ml-26" src={aboutIcon} alt="about me" />
		</div>
	</div>
	<Footer />
</AboutBg>
