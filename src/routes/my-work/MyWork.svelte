<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let uri = api + '?chapter=my-work';
	let myWork;
	let visible = false;
	onMount(async () => {
		const res = await fetch(uri);
		const data = await res.json();
		myWork = data;
		visible = true;
	});
</script>

{#if visible}
	<section
		class="section_myWork"
		in:fly={{ y: -20, duration: 200 }}
		out:fly={{ y: 20, duration: 200 }}
	>
		<h1>{myWork.my_work_header}</h1>
		<div class="left">
			<p>{myWork.my_work_description}</p>
		</div>
		<div class="right">
			<div class="thing_skilled">
				{#each myWork.my_work_rows as thing}
					<div class="skill">
						<h2>{thing.what_work}</h2>
						{@html thing.what_work_description}
					</div>
				{/each}
			</div>
		</div>
		<div class="grid-evener" />
	</section>
{/if}

<style>
	.section_myWork {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 20px;
		justify-content: space-between;
	}

	.right {
		display: flex;
		justify-content: center;
		width: 100%;
	}
	.thing_skilled {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
		padding: 0;

	}
  .skill {
    width:100%;
  }
	.thing_skilled h2 {
		font-weight: 700;
		margin-bottom: 0;
	}
	.thing_skilled p {
		margin-top: 0;
	}
	.left {
		/* display: flex;
		flex-flow: column;
		justify-content: flex-start; */
		width: 100%;
	}
	h1 {
		width: 100%;
		align-self: self-end;
	}
</style>
