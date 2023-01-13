<script lang="ts">
	async function getPosts() {
		const response = await fetch('https://jsonplaceholder.typicode.com/posts');
		const posts = await response.json();
		// console.log(posts);
		return posts;
	}
	// getPosts();
</script>

<main>
	<h1>Posts</h1>
	{#await getPosts()}
		<p>Loading...</p>
	{:then posts}
		<pre class="bg-slate-800">
        {JSON.stringify(posts, null, 2)}
    </pre>
	{:catch error}
		<p class="w-1/2">{error.message}</p>
	{/await}
</main>
