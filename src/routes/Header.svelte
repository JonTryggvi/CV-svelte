<script>
	import { page } from '$app/stores';
	import SvgLibrary from '$lib/components/SvgLibrary.svelte';
</script>

<header>
	<div class="fixed">
		<nav>
			<div class="logo">
				<a href="/">
					<h1>JT</h1>
				</a>
			</div>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/">Hi there!</a>
				</li>
				<li aria-current={$page.url.pathname === '/love' ? 'page' : undefined}>
					<a href="/love">I love to</a>
				</li>
				<li aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}>
					<a href="/experience">Experience</a>
				</li>
				<li aria-current={$page.url.pathname === '/my-work' ? 'page' : undefined}>
					<a href="/my-work">My work</a>
				</li>
				<li aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}>
					<a href="/skills">Skills</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact">Contact me?!</a>
				</li>
			</ul>
			<div class="nav-evener" aria-hidden></div>
		</nav>
	</div>
</header>

<style>
	header {
		height: 48px;
		display: flex;
		justify-content: space-between;
	}
	.logo {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 100%;
		max-width: 3rem;
	}
	.logo h1 {
		font-size: 1.6rem;
		margin: 0;

	}
	.nav-evener {
		width: 100%;
		max-width: 3rem;
	}
	.fixed {
		top: 0;
		left: 0;
		width: 100%;
		height: 48px;
		position: fixed;
	}
	nav {
		display: flex;
		justify-content: space-between;
		--background: rgba(255, 255, 255, 0.7);
		margin: 0 auto;
	}

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: transparent;
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}
	li::after {
		content: '';
		position: absolute;
		bottom: -6px;
		opacity: 0;
		left: 15%;
		width: 60%;
		height: 2px;
	}
	li[aria-current='page']::after {
		width: 70%;
		height: 2px;
		position: absolute;
		bottom: 3px;
		opacity: 1;
		background-color: var(--color-theme-2);
		left: 15%;
		transition: bottom 300ms ease-in-out, opacity 300ms 100ms ease-in-out;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-family: var(--font-mono);
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		/* letter-spacing: 0.1em; */
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
