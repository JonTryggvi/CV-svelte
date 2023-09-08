<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
    let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
    let uri=api+'?chapter=experience';
    let experience;
    let visible = false;
    onMount(async () => {
      const res=await fetch(uri);
      const data= await res.json();
      experience=data;
      visible = true
    });
</script>
{#if visible}
<section class="section_experience" in:fly={{ y: -20, duration: 200 }} out:fly={{y:20, duration:200}}>
  <div class="left">
    <ul class="thing_experienced">
      {#each experience.experience_rows as thing}
      <li>
        <h2>{thing.working_for}</h2>
        <p> {thing.from_to}<br>
        {thing.working_as}</p>
      </li>
      {/each}
    </ul>
  </div>
  <div class="right">
    <h1>{experience.experience_header}</h1>
    <p>{experience.experience_description}</p>
  </div>
</section>
{/if}
<style>
  .section_experience {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }

  .left {
    display: flex;
    justify-content: center;
    width: calc(40% - 20px);
  }
  .thing_experienced {
    list-style: none;
    overflow: auto;
    display: block;
  }
  .thing_experienced h2 {
    font-weight: 700;
    margin-bottom: 0;
  }
  .thing_experienced p {
    margin-top: 0;
  }
  .right {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: calc(60% - 20px);
  }
  .right h1 {
    text-align: left;
    margin-bottom: 0;
  }
</style>