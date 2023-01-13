// get
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async (event) => {
	const options: ResponseInit = {
		status: 418,
		headers: {
			x: 'banana bananan'
		}
	};
	return new Response('Hello', options);
};

// post
