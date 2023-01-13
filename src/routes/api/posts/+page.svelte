<script lang="ts">
	import { each } from 'svelte/internal';

	async function getPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		// console.log(posts);
		return posts;
	}
	// getPosts();
</script>

<main>
	<h1 class="text-3xl">Posts</h1>
	{#await getPosts()}
		<p>Loading...</p>
	{:then posts}
		<p>Showing <b>{posts.length}</b> Posts</p>
		<hr />
		<!-- this is destructuring fetched data/ the clever way -->
		{#each posts as { userId, id, title, body }}
			<div class="collapse">
				<input type="checkbox" class="peer" />
				<div
					class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
				>
					{title}
				</div>
				<div
					class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"
				>
					<p>{body}</p>
				</div>
			</div>
		{/each}

		<!-- this is tipical fetched data/ the noob way -->
		{#each posts as post}
			<p>User: {post.userId}</p>
			<p>Author: {post.id}</p>
			<h1 class="text-2xl">{post.title}</h1>
			<p>
				{post.body}
			</p>
			<hr />
		{/each}
		<pre class="bg-slate-800">
        {JSON.stringify(posts, null, 2)}
    </pre>
	{:catch error}
		<p class="w-1/2">{error.message}</p>
	{/await}
</main>
