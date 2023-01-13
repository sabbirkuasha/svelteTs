<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	console.log(data.data);
</script>

<div class="hero min-h-screen bg-base-200">
	<div class="hero-content text-center w-1/2 shadow-2xl rounded-xl ring-2 ring-slate-700">
		<div class="  ">
			<h1 class="text-5xl font-bold pb-5">{data.data.title}</h1>
			{#each data.data.tags as tag}
				<div class="badge hover:ring-2 ring-2 ring-slate-700 uppercase hover:cursor-crosshair mx-1">
					{tag}
				</div>
			{/each}

			<p class="py-4">
				{data.data.body}
			</p>
			<a href="/"><button class="btn btn-primary">Go Back</button></a>
		</div>
	</div>
</div>
