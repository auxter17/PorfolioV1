<script>
	import ContactBg from '../../components/backgrounds/contactBG.svelte';
	import Footer from '../../components/footer.svelte';
	import contactFb from '/src/images/contact-facebook.png';
	import contactGit from '/src/images/contact-github.png';
	import contactIg from '/src/images/contact-instagram.png';
	import phone from '/src/images/phone.png';
	import mail from '/src/images/mail.png';
</script>

<ContactBg>
	<div class="absolute top-[130px] p-20 w-[100vw] h-auto flex justify-center">
		<div class="p-2 w-full">
			<h1 class="font-bold text-[#70F6F8]">Contact Me</h1>
			<h1 class="font-bold text-[35px]">Let's create something</h1>
			<h1 class="font-bold text-[#70F6F8] text-[25px]">amazing.</h1>
			<div class="py-2 font-bold">
				<p>Let's get in touch and work together!</p>
				<p>Please get in touch if you have any questions or simply to say hi.</p>
				<p>I'm always up for trying something new.</p>
			</div>
			<div>
				<div class="py-2">
					<a
						class="flex mb-2 rounded-lg w-auto max-w-[600px] p-1 bg-gradient-to-r from-white/[0.7] to-black/[0.3]"
						href="https://www.facebook.com/angelo.auxtero.3/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img class="h-[40px] px-4" src={contactFb} alt="contact-facebook" />
						<h3 class="text-black py-2 font-bold">Angelo Magdua Auxtero</h3>
					</a>
					<a
						class="flex mb-2 rounded-lg w-auto max-w-[600px] p-1 bg-gradient-to-r from-white/[0.7] to-black/[0.3]"
						href="https://github.com/auxter17"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img class="h-[40px] px-4" src={contactGit} alt="contact-github" />
						<h3 class="text-black py-2 font-bold">Angelo Magdua Auxtero</h3>
					</a>
					<a
						class="sample flex mb-2 rounded-lg w-auto max-w-[600px] p-1 bg-gradient-to-r from-white/[0.7] to-black/[0.3]"
						href="https://www.facebook.com/angelo.auxtero.3/"
						target=""
						rel="noopener noreferrer"
					>
						<img class="h-[40px] px-4" src={contactIg} alt="contact-instagram" />
						<h3 class="text-black py-2 font-bold">Angelo Magdua Auxtero</h3>
					</a>
					<div class="py-4 flex">
						<div class="flex">
							<img class="rounded-full p-2 bg-[#70FDBB] h-[40px]" src={phone} alt="tel-phone" />
							<p class="font-bold p-2">(+63) 927 638 9654</p>
						</div>
						<div class="flex">
							<img class="rounded-full p-2 bg-[#70FDBB] h-[40px]" src={mail} alt="tel-phone" />
							<p class="font-bold p-2">angeloauxtero17@gmail.com</p>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
		<div class="bg-[#1C1C1C] w-[60vw] rounded flex flex-col items-start h-auto py-6 px-[80px]">
			<form class="w-full">
				<div class="flex flex-col mb-4">
					<label for="name" class="font-bold text-lg mb-2">Name</label>
					<input
						type="text"
						id="name"
						placeholder="Enter your name"
						class="placeholder:text-gray-600 w-full py-1 px-4 rounded-xl bg-transparent border-[1px]"
					/>
				</div>

				<div class="flex flex-col mb-4">
					<label for="fromEmail" class="font-bold text-lg mb-2">Email:</label>
					<input
						type="email"
						id="fromEmail"
						placeholder="Enter your email"
						class="placeholder:text-gray-600 w-full py-1 px-4 rounded-xl bg-transparent border-[1px]"
					/>
				</div>

				<div class="flex flex-col mb-4">
					<label for="subject" class="font-bold text-lg mb-2">Subject:</label>
					<input
						type="text"
						id="subject"
						placeholder="Enter subject"
						class="placeholder:text-gray-600 w-full py-1 px-4 rounded-xl bg-transparent border-[1px]"
					/>
				</div>

				<div class="flex flex-col mb-4">
					<label for="message" class="font-bold text-lg mb-2">Message:</label>
					<textarea
						id="message"
						placeholder="Enter your message"
						class="placeholder:text-gray-600 w-full h-full py-1 px-4 rounded-xl bg-transparent border-[1px]"
					></textarea>
				</div>

				<div class="text-black flex-col items-end flex w-full font-bold text-lg mt-4">
					<button
						type="submit"
						class="hover:shadow-[0_0_10px_2px_#70F6F8] bg-[#70FDBB] p-2 rounded-xl"
						>Send Message</button
					>
				</div>
			</form>
		</div>
	</div>
	<Footer />
</ContactBg>
