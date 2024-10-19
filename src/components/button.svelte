<script>
	export let buttonLable;
	export let buttonClass = '';
</script>

<div class="text-black flex-col items-center flex font-bold text-lg w-full">
	<button
		type="submit"
		class={`hover:shadow-[0_0_10px_2px_#70F6F8] bg-[#70FDBB] p-2 rounded-xl ${buttonClass}`}
		>{buttonLable}</button
	>
</div>
