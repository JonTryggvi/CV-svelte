<script>
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';

	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let uri = api + '?chapter=hello';
	let intro;
	let imgLarge;
	let imgMedium;
	let imgSmall;
	let visible = false;
	let description;
	onMount(async () => {
		const res = await fetch(uri);
		const data = await res.json();
		intro = data;
		imgLarge = intro.img.sizes['fp-large'];
		imgMedium = intro.img.sizes.medium_large;
		imgSmall = intro.img.sizes.thumbnail;
		visible = true;
		description = intro.intro_description.replace(
			'{{music}}',
			`<a href=${intro.unijonlink} target="_blank">music</a>`
		);
	});
</script>

{#if visible}
	<section
		class="section_intro"
		in:fly={{ y: 20, duration: 200 }}
		out:fly={{ y: -20, duration: 200 }}
	>
		<h1>Hello my name is {intro.name}.</h1>
		<div class="left">
			<p>{@html description}</p>
		</div>
		<div class="right">
			<picture class="intro_img">
				<source media="(min-width:650px)" srcset={imgMedium} />
				<source media="(min-width:465px)" srcset={imgSmall} />
				<img src={imgLarge} alt="JT" />
			</picture>
		</div>
		<div class="grid-evener" />
	</section>
{/if}

<style lang="scss">
	.section_intro {
		display: grid;
		grid-template:
			'heading heading heading'
			'left left right'
			'evener evener evener';
		gap: 40px;
	}

	@media (max-width: 768px) {
		.section_intro {
      grid-template: 'heading' 'right' 'left' 'evener';
    }
	}
	h1 {
		grid-area: heading;
		flex-basis: 100%;
		align-self: self-end;
	}
	.left {
		grid-area: left;
		width: 100%;
	}
	.right {
		grid-area: right;
		width: 100%;
	}
	.intro_img {
		width: 100%;
		& img {
			width: 100%;
		}
	}
	.grid-evener {
		grid-area: evener;
	}
</style>
