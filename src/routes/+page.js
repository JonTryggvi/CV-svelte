// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;
export async function load({ fetch, params }) {
  const res = await fetch(`https://jontryggvi.is/wp-json/svelte/get-post-acf/?chapter=social`);
  const item = await res.json();

  return { item };
}
