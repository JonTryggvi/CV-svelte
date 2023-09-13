<script>
  import { onMount } from "svelte";
  import { fly } from 'svelte/transition';
  let api='https://jontryggvi.is/wp-json/svelte/get-post-acf/';
  let uri=api+'?chapter=contact';
  let contact;
  let visible = false;
  let size = '28px';
  onMount(async () => {
    const res=await fetch(uri);
    const data= await res.json();
    contact=data;
    visible = true
  });
</script>
{#if visible}
<section class="section_contact" in:fly={{ y: -20, duration: 200 }} out:fly={{y:20, duration:200}}>
  <div class="left">
    <h1>My contact details</h1>
   <address>
    <ul class="address">
      <li>
        <span class="material-icons">person</span>{contact.fullname}
      </li>
      <li>
        <span class="material-icons">location_on</span>{contact.address} {contact.city}
      </li>
      <li>
       <span class="material-icons">email</span>{contact.email}
      </li>
      <li>
        <span class="material-icons">call</span>{contact.tel}
      </li>
    </ul>
   </address>
  </div>

</section>
{/if}
<style>
  .section_contact {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
  }

  .left {
    display: flex;
    flex-flow: column;
    justify-content: center;

  }
  h1 {
    text-align: left;
  }
  .address {
    list-style: none;
    overflow: auto;
    display: block;
  }
  .address li {
    display: flex;
    gap: 8px;
    align-items: center;
    margin-bottom: 8px;
  }


</style>