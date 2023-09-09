<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
    let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
    let uri=api+'?chapter=education';
    let education;
    let visible = false;
    onMount(async () => {
      const res=await fetch(uri);
      const data= await res.json();
      education=data;
      visible = true
    });
</script>
{#if visible}
<section class="section_education" in:fly={{ y: -20, duration: 200 }} out:fly={{y:20, duration:200}}>
  <h1>{education.education_header}</h1>
  <div class="left">
    <div class="thing_education">
      {#each education.education_rows as thing}
        <div>
          <h2>{thing.what_education}</h2>
          <p> {thing.when_education}<br>
          {thing.where_education}</p>
        </div>
      {/each}
    </div>
  </div>
  <div class="right">
    <p>{education.education_description}</p>
  </div>
  <div class="grid-evener" aria-hidden="true"></div>
</section>
{/if}
<style>
  .section_education {
    display: grid;
    grid-template:
      'heading heading heading'
      'left right right';
    gap: 20px;
  }

  .left {
    grid-area: left;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .thing_education {
    display: grid;
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }
  .thing_education h2 {
    font-weight: 700;
    margin-bottom: 0;
  }
  .thing_education p {
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
    .section_education {
      grid-template: 'heading' 'right' 'left';
    }
	}

</style>