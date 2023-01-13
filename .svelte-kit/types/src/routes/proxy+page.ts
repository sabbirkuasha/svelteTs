// @ts-nocheck
import type { PageLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageLoad>[0]) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const posts = await response.json();

	return { posts };
};
