// @ts-nocheck
import type { PageServerLoad } from './$types';

export const load = async ({ params }: Parameters<PageServerLoad>[0]) => {
	// console.log(params.id);
	const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
	const post = await response.json();

	return { data: post };
};
