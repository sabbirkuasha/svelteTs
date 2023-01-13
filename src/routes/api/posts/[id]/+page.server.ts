import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	// console.log(params.id);
	const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
	const post = await response.json();

	return { data: post };
};
