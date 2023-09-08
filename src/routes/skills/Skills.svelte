<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
    let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
    let uri=api+'?chapter=skills';
    let skills;
    let visible = false;
    onMount(async () => {
      const res=await fetch(uri);
      const data= await res.json();
      skills=data;
      visible = true
    });
</script>
{#if visible}
<section class="section_skills" in:fly={{ y: -20, duration: 200 }} out:fly={{y:20, duration:200}}>
  <div class="left">
    <h1>{skills.skills_header}</h1>
    <p>{skills.skills_descripton}</p>
  </div>
  <div class="right">

     <ul class="thing_skillsd">
      {#each skills.skills_rows as thing}
      <li>
        <h2>{thing.skill_or_asset}</h2>
        <p> {thing.list_of_skill_or_asset}</p>
      </li>
      {/each}
    </ul>
  </div>
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
    width: calc(30% - 20px);
  }
  .thing_skillsd {
    list-style: none;
    overflow: auto;
    display: block;
  }
  .thing_skillsd h2 {
    font-weight: 700;
    margin-bottom: 0;
  }
  .thing_skillsd p {
    margin-top: 0;
  }
  .left {
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    width: calc(70% - 20px);
  }
  .left h1 {
    text-align: left;
    margin-bottom: 0;
  }
</style>