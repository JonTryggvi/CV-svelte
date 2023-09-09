<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let uri = api + '?chapter=experience';
	let experience;
	let visible = false;
	onMount(async () => {
		const res = await fetch(uri);
		const data = await res.json();
		experience = data;
		visible = true;
	});
</script>

{#if visible}
	<section
		class="section_experience"
		in:fly={{ y: -20, duration: 200 }}
		out:fly={{ y: 20, duration: 200 }}
	>
		<h1>{experience.experience_header}</h1>
		<div class="left">
			<div class="thing_experienced">
				{#each experience.experience_rows as thing}
					<div>
						<h2>{thing.working_for}</h2>
						<p>
							{thing.from_to}<br />
							{thing.working_as}
						</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="right">
			<p>{experience.experience_description}</p>
		</div>
		<div class="grid-evener" aria-hidden="true" />
	</section>
{/if}

<style>
	.section_experience {
		display: grid;
		grid-template:
			'heading heading heading'
			'left right right';
		gap: 20px;
	}

	.left {
		grid-area: left;
		display: grid;
		width: 100%;
	}
	.thing_experienced {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}
	.thing_experienced div {
		width: 100%;
	}
	.thing_experienced h2 {
		font-weight: 700;
		margin-bottom: 0;
	}
	.thing_experienced p {
		margin-top: 0;
	}
	.right {
		grid-area: right;
		display: flex;
		flex-flow: column;
		justify-content: flex-start;
		align-items: flex-start;
		width: 100%;
	}
	h1 {
		grid-area: heading;
		text-align: center;
		margin-bottom: 0;
		width: 100%;
		align-self: self-end;
	}

	@media (max-width: 768px) {
		.section_experience {
			grid-template: 'heading' 'right' 'left';
		}
		.thing_experienced {
			grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
		}
	}
</style>
