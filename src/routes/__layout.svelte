<script>
	import Footer from '$lib/components/footer.svelte';
	import Navbar from '$lib/components/navbar.svelte';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import '../app.css';

	//onMount runs the code once the page is visible in teh broswer
	onMount(async () => {
		themeChange(false);
	});
</script>

<div class="text-center py-1"><p>Site is currently under construction</p></div>
<Navbar />
<main class="container max-w-3xl mx-auto px-4 mb-20">
	<slot />
</main>
<Footer />
