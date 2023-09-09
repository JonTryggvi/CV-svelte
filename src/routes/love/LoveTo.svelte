<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let uri = api + '?chapter=love';
	let love;
	let visible = false;
	onMount(async () => {
		const res = await fetch(uri);
		const data = await res.json();
		love = data;
		visible = true;
	});
</script>

{#if visible}
	<section
		class="section_love"
		in:fly={{ y: -20, duration: 200 }}
		out:fly={{ y: 20, duration: 200 }}
	>
		<h1>{love.love_header}</h1>
		<div class="grid-container">
			<div class="left">
				<p>{love.love_description}</p>
				<div class="thing_loved">
					{#each love.some_things_i_love as thing}
						<div>
							<h2>{thing.title}</h2>
							<p>
								{thing.description}
								{#if 'Music' == thing.title}
									<a href={love.unijonlink} target="_blank">UniJon</a>
								{/if}
							</p>
						</div>
					{/each}
				</div>
			</div>
			<div class="right">
				<picture>
					<img src={love.img.sizes.large} alt="UniJon" />
				</picture>
			</div>
		</div>
	</section>
{/if}

<style lang="scss">
	.grid-container {
		grid-template: 'left left right';
		grid-gap: 20px;
	}
	@media (max-width: 768px) {
    .grid-container {
      grid-template: 'left' 'right';
    }
	}
	h1 {
		width: 100%;
	}
	.left {
		grid-area: left;
		width: 100%;
	}
	.right {
		grid-area: right;
		display: flex;
		justify-content: flex-end;
		width: 100%;
	}
	.thing_loved {
		display: grid;
		gap: 15px;
		grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
	}
	.thing_loved h2 {
		font-weight: 700;
	}

	picture {
		display: flex;
		justify-content: flex-end;
		width: 100%;
    padding-top: 1.6rem;
		& img {
			object-fit: contain;
			width: 100%;
			max-height: 70vh;
		}
	}
</style>
