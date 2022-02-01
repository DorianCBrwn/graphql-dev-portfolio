<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { gql } from 'graphql-request';

	export const load = async () => {
		const query = gql`
			query GetProjects {
				projects {
					name
					slug
					description
					demo
					sourceCode
					image {
						url
					}
				}
			}
		`;

		const { projects } = await client.request(query);

		return {
			props: {
				projects
			}
		};
	};
</script>

<script>
	export let projects;
</script>

<h1>Projects</h1>

<div>
	<!-- Destructuring projects prop from load function -->
	<!-- Iterate through props and render each project with the Project Card component -->
	{#each projects as { name, slug, description, image }}
		<!-- Because the expected props on the component are the same as what's being passed, then there is no need to label the props. -->
		<ProjectCard {name} {slug} {description} url={image[0].url} />
	{/each}
</div>
