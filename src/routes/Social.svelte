<script>
  import { page } from '$app/stores';
  import SvgLibrary from '$lib/images/SvgLibrary.svelte';
  let items = $page.data.item.social_rows
</script>
<div class="footer-logos">
  <ul>
    {#each items as item}
      <li><a href={item.link} target="_blank"><SvgLibrary name={item.name} class="this-is-optional" width="2rem" height="2rem"/></a></li>
    {/each}
  </ul>
</div>

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