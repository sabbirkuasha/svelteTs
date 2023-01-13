<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	console.log(data);

	function slugify(text: string) {
		return text
			.replace(/\s/g, '-') //this means, we will target white space of globally then replace that with '-'
			.replace(/[^a-zA-Z0-9]/g, '-') //this means, any character other than a-z, A-Z & 0-9 will be replaced with nothing
			.toLocaleLowerCase();
	}
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
				class="text-2xl uppercase collapse-title bg-slate-700 text-primary-content  peer-checked:bg-slate-900 peer-checked:text-secondary-content peer-checked:shadow"
			>
				{title}
				<a
					href="api\posts\{id}"
					class="link text-sm ring-2 rounded px-2 ring-slate-800 bg-slate-700 text-slate-900"
					>Read...</a
				>
			</div>

			<div
				class=" peer-checked:p-5 collapse-content bg-slate-700 text-primary-content peer-checked:ring-2 peer-checked:bg-slate-800 peer-checked:text-secondary-content"
			>
				<p class="mb-5">{body}</p>
				<a href="api\posts\{id}"><button class="btn btn-info"> Read Full Article</button></a>
			</div>
		</div>
	{/each}
{:catch error}
	<p class="w-1/2">{error.message}</p>
{/await}
