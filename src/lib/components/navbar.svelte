<script>
	import ThemeSelect from '$lib/components/theme-select.svelte';
	import Logo from '$lib/components/d-logo.svelte';
	import { page } from '$app/stores';
</script>

<nav class="navbar mb-16 shadow-lg bg-neutral text-neutral-content top-0 sticky z-0">
	<div class="flex-1 px-2 mx-2 w-1/6">
		<a href="/" class="w-fit">
			{#key $page}
				<Logo width="50" height="fit-content" />
			{/key}
		</a>
	</div>

	<div class="dropdown dropdown-left lg:hidden">
		<div tabindex="0" class="m-1 btn">Links</div>
		<ul
			tabindex="0"
			class="bg-neutral rounded-box shadow text-neutral-content p-2 w-52 menu dropdown-content "
		>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts"> Blog </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about"> About </a>
		</ul>
	</div>

	<div class="flex-none hidden px-2 mx-2 lg:flex">
		<div class="flex items-stretch">
			<a class="btn btn-ghost btn-sm rounded-btn" href="/projects"> Portfolio </a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/posts">Blog</a>
			<a class="btn btn-ghost btn-sm rounded-btn" href="/about">About</a>
			<div class="px-4">
				<ThemeSelect />
			</div>
		</div>
	</div>
</nav>
