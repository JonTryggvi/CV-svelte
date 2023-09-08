<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let uri = api + '?chapter=skills';
	let skills;
	let visible = false;
	onMount(async () => {
		const res = await fetch(uri);
		const data = await res.json();
		skills = data;
		visible = true;
	});
</script>

{#if visible}
	<section
		class="section_skills"
		in:fly={{ y: -20, duration: 200 }}
		out:fly={{ y: 20, duration: 200 }}
	>
		<h1>{skills.skills_header}</h1>
		<div class="left">
			<p>{skills.skills_descripton}</p>
		</div>
		<div class="right">
			<div class="thing_skilled">
				{#each skills.skills_rows as thing}
					<div class="skill">
						<h2>{thing.skill_or_asset}</h2>
						<p>{thing.list_of_skill_or_asset}</p>
					</div>
				{/each}
			</div>
		</div>
		<div class="grid-evener" />
	</section>
{/if}

<style>
	.section_skills {
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
		display: flex;
		gap: 20px;
    flex-flow: row wrap;
		padding: 0;

	}
  .skill {
    width:48%;
  }
	.thing_skilled h2 {
		font-weight: 700;
		margin-bottom: 0;
	}

	.left {
		width: 100%;
	}
	h1 {
		width: 100%;
		align-self: self-end;
	}
</style>
