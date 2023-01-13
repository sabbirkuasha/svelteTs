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
export const POST: RequestHandler = async (event) => {
	const data = await event.request.formData();
	const email = data.get('email');

	console.log(email);

	return new Response(JSON.stringify({ success: true }), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
