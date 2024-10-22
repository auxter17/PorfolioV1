<script>
	import { signIn } from '$lib/auth';
	import ContactBg from '../../../components/backgrounds/contactBG.svelte';
	import Button from '../../../components/button.svelte';
	import { goto } from '$app/navigation';
	import Footer from '../../../components/footer.svelte';
	import Cookies from 'js-cookie';

	let userEmail = '';
	let userPassword = '';

	async function handleLogin(event) {
		event.preventDefault();

		const result = await signIn(userEmail, userPassword);

		if (result) {
			const access_token = result.session?.access_token;
			const refresh_token = result.session?.refresh_token;

			Cookies.set('access_token', access_token, {
				secure: window.location.protocol === 'https:',
				sameSite: 'lax',
				path: '/',
				expires: 1
			});

			Cookies.set('refresh_token', refresh_token, {
				secure: window.location.protocol === 'https:',
				sameSite: 'lax',
				path: '/',
				expires: 1
			});

			goto('/admin/dashboard?login=success');
		} else {
			console.error('Sign-in failed');
		}
	}
</script>

<ContactBg>
	<div class="absolute top-[200px] rounded-xl w-full">
		<div
			class="w-[900px] h-[500px] mx-auto rounded-xl flex justify-center bg-gradient-to-r from-black/[0.7] to-white/[0.3]"
		>
			<div class="w-full">
				<div class="left-content m-[50px]">
					<h1 class="font-bold text-[#70F6F8]">Administrator Access</h1>
					<p class="font-bold text-[20px] mt-2">Welcome, Administrator!</p>
					<p class="font-bold text-[#70F6F8] mt-4">
						Please log in to access the admin dashboard and manage the platform.
					</p>
					<ul class="w-full mt-4 font-bold">
						<li>Monitor system performance</li>
						<li>Manage user accounts</li>
						<li>Review analytics and reports</li>
						<li>Control system settings</li>
					</ul>
				</div>
			</div>
			<div class="w-full p-2 rounded-lg pt-[50px] bg-black">
				<h1 class="mx-auto w-[70px] p-2 text-[30px] font-bold">LOGIN</h1>
				<!-- <ul>
                    {#each data.countries as country}
                        <h1>Sample Data</h1>
                        <li>{country.name}</li>
                    {/each}
                </ul> -->
				<form
					class="flex flex-col my-4 mx-auto w-[400px] gap-y-8"
					on:submit|preventDefault={handleLogin}
				>
					<input
						bind:value={userEmail}
						class="rounded-full bg-transparent border p-4 placeholder:text-gray-600"
						type="text"
						placeholder="User or Email"
					/>
					<input
						bind:value={userPassword}
						class="rounded-full bg-transparent border p-4 placeholder:text-gray-600"
						type="password"
						placeholder="Password"
					/>
					<div class="p-2 flex">
						<div class="w-full py-auto">
							<input type="checkbox" placeholder="Remember me" />
							<label for="rememberMe">Remember me</label>
						</div>
						<div class="flex-col flex w-full items-end">
							<a href="/">Forgot Password</a>
						</div>
					</div>
					<Button buttonClass="w-[390px]" buttonLable="Login"></Button>
				</form>
			</div>
		</div>
	</div>
	<Footer />
</ContactBg>
