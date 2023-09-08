<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
    let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
    let uri=api+'?chapter=love';
    let love;
    let visible = false;
    onMount(async () => {
      const res=await fetch(uri);
      const data= await res.json();
      love=data;
      visible = true
    });


</script>
{#if visible}
<section class="section_love" in:fly={{ y: -20, duration: 200 }} out:fly={{y:20, duration:200}}>
  <h1>{love.love_header}</h1>
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
      <img src={love.img.sizes.large} alt="UniJon">
    </picture>
  </div>
</section>
{/if}
<style>
  .section_love {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  h1 {
    flex-basis: 100%;
  }
  .left {
    width: calc(80% - 20px);
    flex-basis: calc(80% - 20px);
  }
  .right {
    display: flex;
    justify-content: flex-end;
    width: calc(20% - 20px);
    flex-basis: calc(20% - 20px);
  }
  .thing_loved {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr))
  }
  .thing_loved h2 {
    font-weight: 700;
  }

  picture {
    display: flex;

    justify-content: flex-end;
    width: 100%;
    & img {
      max-height: 70vh;
    }
  }

</style>