<script>
	import { onMount } from "svelte";
	import SvgLibrary from '$lib/components/SvgLibrary.svelte';

	let api = 'https://jontryggvi.is/wp-json/svelte/get-post-acf/';
	let items=[];
	let uri = api + '?chapter=social';
	let visible = false;
	let color = 'rgba(0,0,0,.7)';

	onMount(async () => {
    const res = await fetch(uri);
		const data = await res.json();
		items = data;
		visible = true;
	});

</script>

{#if visible}
<div class="footer-logos">
	<ul>
      {#each items as item}
        <li>
          <a href={item.link} target="_blank"
            ><SvgLibrary name={item.name} class="social-icons" width="2rem" height="2rem" {color}  /></a
          >
        </li>
      {/each}
    </ul>
  </div>
  {/if}

<style>
	.footer-logos ul {
		width: 320px;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: space-around;
		list-style: none;
	}

</style>
