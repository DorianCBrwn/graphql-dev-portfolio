<script context="module">
	import { projectQuery } from '$lib/graphql-queries.js';
	import { client } from '$lib/graphql-client';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { project } = await client.request(projectQuery, variables);

		return {
			props: {
				project
			}
		};
	};
</script>

<script>
	export let project;
</script>

<svelte:head>
	<title>My Portfolio | {project.title}</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx10 lg:-mx-20 xl:-mx-38 mb-5">
	<img class="rounded-lg" src={project.image[0].url} alt={project.title} />
</div>

<h1 class="text-4x1 font-semibold mb-5">{project.name}</h1>

<div class="mb-5 flex justify-between">
	<div>
		{#if project.tags}
			{#each project.tags as tag}
				<span class="badge badge-primary mr-2 hover:bg-primary-focus cursor-pointer">{tag}</span>
			{/each}
		{/if}
	</div>
</div>

<div class="mb-5 prose flex prose-a:text-primary hover:prose-a:text-primary-focus">
	<a href={project.demo} class="mr-5">Demo</a>
	<a href={project.sourceCode}>Source Code</a>
</div>

<article class="prose prose-xl">
	{@html marked(project.description)}
</article>
