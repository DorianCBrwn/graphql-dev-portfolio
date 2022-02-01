import { gql } from 'graphql-request';

export const authorsQuery = gql`
	query GetQAuthors {
		authors {
			name
			intro
			bio
			slug
			picture {
				url
			}
		}
	}
`;

export const projectsQuery = gql`
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
