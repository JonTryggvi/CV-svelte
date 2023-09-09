<script>
	import { page } from '$app/stores';
	let y;
	let clicked = false;
	let clickHandler = () => {
		clicked = !clicked;
	};
</script>

<svelte:window bind:scrollY={y} />
<header>
	<div class="fixed {y > 20 ? 'scrolled' : ''} {clicked ? 'open' : ''}">
		<nav>
			<div class="logo">
				<a href="/">
					<h1>JT</h1>
				</a>
			</div>
			<ul>
				<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
					<a href="/" on:click={clickHandler}>Hi there!</a>
				</li>
				<li aria-current={$page.url.pathname === '/love' ? 'page' : undefined}>
					<a href="/love" on:click={clickHandler}>I love to</a>
				</li>
				<li aria-current={$page.url.pathname === '/experience' ? 'page' : undefined}>
					<a href="/experience" on:click={clickHandler}>Experience</a>
				</li>
				<li aria-current={$page.url.pathname === '/education' ? 'page' : undefined}>
					<a href="/education" on:click={clickHandler}>Education</a>
				</li>
				<li aria-current={$page.url.pathname === '/my-work' ? 'page' : undefined}>
					<a href="/my-work" on:click={clickHandler}>My work</a>
				</li>
				<li aria-current={$page.url.pathname === '/skills' ? 'page' : undefined}>
					<a href="/skills" on:click={clickHandler}>Skills</a>
				</li>
				<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
					<a href="/contact" on:click={clickHandler}>Contact me</a>
				</li>
			</ul>
			<div class="hamburger-container">
				<button class="" on:click={clickHandler}>Menu</button>
			</div>
		</nav>
	</div>
</header>

<style lang="scss">
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
		max-width: 5rem;
		z-index: 3;
	}
	.logo h1 {
		font-size: 1.6rem;
		margin: 0;
	}
	.hamburger-container {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		width: 100%;
		max-width: 3rem;
		visibility: hidden;
		z-index: 3;
		& button {
			position: relative;
			border: none;
			background-color: transparent;
			padding: 0;
			color: inherit;
			width: 100%;
			&::before,
			&::after {
				position: absolute;
				left: -16px;
				content: '';
				width: 15px;
				height: 1px;
				background-color: var(--color-text);
				transform: rotateZ(0);
				transform: transform 300ms ease-in-out;
			}
			&::before {
				top: 7px;
			}
			&::after {
				bottom: 7px;
			}
			.open &::before {
				top: 50%;
				transform: rotateZ(45deg);
				transition: transform 300ms ease-in-out;
			}
			.open &::after {
				bottom: calc(50% - 1px);
				transform: rotateZ(-45deg);
				transition: transform 300ms ease-in-out;
			}
		}
	}

	.fixed {
		top: 0;
		left: 0;
		width: 100%;
		height: 48px;
		position: fixed;
		background-color: transparent;
	}
	.scrolled {
		background-color: var(--color-bg-0);
		box-shadow: 0 0 30px -14px rgba(0, 0, 0, 0.3);
		transition: box-shadow 200ms ease-in-out, background-color 200ms 100ms ease-in-out;
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
		max-height: none;
	}
	li::after {
		content: '';
		position: absolute;
		bottom: 0;
		opacity: 0;
		left: 15%;
		width: 60%;
		height: 2px;
	}
	li[aria-current='page']::after {
		width: 70%;
		height: 2px;
		position: absolute;
		bottom: 2px;
		opacity: 1;
		background-color: var(--color-theme-2);
		left: 15%;
		transition: bottom 300ms 200ms ease-in-out, opacity 400ms 200ms ease-in-out;
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		font-family: var(--font-body);
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-2);
	}

	@media (max-width: 768px) {
		.logo {
			max-width: 3rem;
		}
		.hamburger-container {
			visibility: visible;
			max-width: 3rem;
		}

		ul {
			position: absolute;
			right: -100vw;
			top: 0px;
			width: 100vw;
			height: 100vh;
			z-index: 2;
			background-attachment: fixed;
			background-color: var(--color-bg-1);
			background-image: radial-gradient(
					50% 50% at 50% 50%,
					rgba(255, 255, 255, 0.75) 0%,
					rgba(255, 255, 255, 0) 100%
				),
				linear-gradient(180deg, var(--color-bg-0) 0%, var(--color-bg-1) 15%, var(--color-bg-2) 50%);
			display: flex;
			flex-flow: column;
			opacity: 0;
			justify-content: flex-start;
			padding-top: 13rem;
			transition: opacity 200ms cubic-bezier(0.47, 0, 0.745, 0.715);
		}
		.fixed.open ul {
			right: 0;
			opacity: 1;
			transition: right 300ms 300ms cubic-bezier(0.47, 0, 0.745, 0.715),
				opacity 400 300 cubic-bezier(0.47, 0, 0.745, 0.715);
		}
		li {
			max-height: 28px;
		}
	}
</style>
