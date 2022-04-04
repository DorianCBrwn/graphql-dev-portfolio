<!-- Script tag loads data from the graphgl dataset -->
<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries.js';

	// Load function used to load the data from the GraphQL server.
	export const load = async () => {
		const [authorReq, projectsReq] = await Promise.all([
			client.request(authorsQuery),
			client.request(projectsQuery)
		]);

		// Defining variables to be used in the component and setting to return value of requests
		const { authors } = authorReq;
		const { projects } = projectsReq;

		return {
			props: {
				projects,
				authors
			}
		};
	};
</script>

<!-- Script tag exports the props to be used in the markup. -->
<script>
	export let projects;
	export let authors;
</script>

<!-- Adds meta data to the page. -->
<svelte:head>
	<title>Dorianb.dev</title>
</svelte:head>

<!-- Page Markup -->
<h1 class="font-bold text-center mb-20 text-5xl">Welcome to my Portfolio</h1>
<!-- Sets font weight 700, text centered, margin bottom 20, text size and line height based on tailwind config -->

{#each authors as { name, intro, picture: { url } }}
	<!-- Iterates through authors object and sets the name, intro and picture url to the variables. -->
	<div class="flex mb-40 items-end">
		<!-- Sets display flex, margin bottom, and flex end  -->
		<div class="mr-6">
			<!-- Sets margin right -->
			<h2 class="text-3xl mb-4 font-bold tracking-wider">{name}</h2>
			<!-- Sets text size, margin bottom, font bold and letter spacing -->
			<p class="text-xl mb-4">{intro}</p>
		</div>

		<img class="mask mask-squircle h-48" src={url} alt={name} />
	</div>
{/each}

<div class="grid gap-10 md:grid-cols-4 md:px-10 lg:grid-cols-6 lg:-mx-52">
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</div>
