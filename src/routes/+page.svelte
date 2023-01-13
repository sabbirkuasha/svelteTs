<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);
</script>

{#await data}
	<p>Loading...</p>
{:then posts}
	<p>Showing <b>{data.posts.length}</b> Posts</p>
	<hr />
	<!-- this is destructuring fetched data/ the clever way -->
	{#each data.posts as { userId, id, title, body }}
		<div class="collapse">
			<input type="checkbox" class="peer" />
			<div
				class="text-2xl collapse-title bg-slate-700 text-primary-content  peer-checked:bg-slate-900 peer-checked:text-secondary-content peer-checked:shadow"
			>
				{title}
			</div>
			<div
				class="collapse-content bg-slate-700 text-primary-content peer-checked:ring-2 peer-checked:bg-slate-800 peer-checked:text-secondary-content"
			>
				<p>{body}</p>
			</div>
		</div>
	{/each}
{:catch error}
	<p class="w-1/2">{error.message}</p>
{/await}
