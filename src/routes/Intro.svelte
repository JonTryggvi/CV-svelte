<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';

    let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
    let uri=api+'?chapter=hello';
    let intro;
    let imgLarge;
    let imgMedium;
    let imgSmall;
    let visible = false;
    let description
    onMount(async () => {
        const res=await fetch(uri);
        const data= await res.json();
        intro=data;
        imgLarge = intro.img.sizes['fp-large'];
        imgMedium = intro.img.sizes.medium_large;
        imgSmall = intro.img.sizes.thumbnail;
        visible = true
        description = intro.intro_description.replace('{{music}}', `<a href=${intro.unijonlink} target="_blank">music</a>`)
    });

</script>
{#if visible}
  <section class="section_intro" in:fly={{ y: 20, duration: 200 }} out:fly={{y:-20, duration:200}}>
    <h1>Hello my name is {intro.name}</h1>
    <div class="left">
      <p>{@html description}</p>
    </div>
    <div class="right">
      <picture class="intro_img">
        <source media="(min-width:650px)" srcset={imgMedium}>
        <source media="(min-width:465px)" srcset={imgSmall}>
        <img src={imgLarge} alt="JT" />
      </picture>
    </div>
    <div class="grid-evener" />
  </section>
{/if}
<style>

  .section_intro {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: space-between;
  }
  h1 {
    flex-basis: 100%;
    align-self: self-end;
  }
  .left {
    width: calc(460% - 20px);
    flex-basis: calc(60% - 20px);
  }
  .right {
    width: calc(40% - 20px);
    flex-basis: calc(40% - 20px);
  }
  .intro_img {
    width: 100%;
    & img {
      width: 100%;
    }
  }

</style>