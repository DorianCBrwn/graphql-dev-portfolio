<script>
	import { draw, fly, scale, fade } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let width = '';
	export let height = '';
</script>

<svg xmlns="http://www.w3.org/2000/svg" {width} {height} fill="none" viewBox="0 0 156 156">
	<g class="D-logo">
		<ellipse
			in:draw={{ duration: 500, easing: quintOut }}
			out:fade
			class="head-circle"
			cx="73.298"
			cy="16.009"
			stroke="#FEFCFB"
			stroke-width="4"
			rx="7.052"
			ry="7.009"
		/>
		<path
			class="outer-d-path"
			in:draw={{ duration: 1000 }}
			out:fade
			stroke-width="8"
			d="M81.515 15.847C117.68 15.847 147 35.774 147 60.355c0 24.58-29.319 44.507-65.485 44.507l-21.409 13.695v-33.38l-20.149 24.821h-20.15"
		/>
		<path
			class="inner-d"
			in:fade
			d="M91.59 88.106c16.692 0 30.223-12.329 30.223-27.537 0-15.208-13.531-27.537-30.223-27.537v55.074z"
		/>
		<ellipse
			in:draw={{ duration: 500, easing: quintOut }}
			out:fade
			class="tail-circle"
			cx="16.03"
			cy="110.135"
			stroke="#FEFCFB"
			stroke-width="4"
			rx="4.03"
			ry="4.005"
		/>
		<ellipse
			in:fly={{ y: 30 }}
			cx="43.231"
			cy="122.151"
			fill="#fff"
			class="small-circle"
			rx="4.03"
			ry="4.005"
		/>
		<ellipse
			in:fly={{ x: 30 }}
			cx="72.526"
			cy="137.992"
			fill="#fff"
			class="large-cirlce"
			rx="6.281"
			ry="6.008"
		/>
		<ellipse
			in:fly={{ x: -30 }}
			cx="99.145"
			cy="116.716"
			fill="#fff"
			class="medium-circle"
			rx="5.037"
			ry="5.007"
		/>
	</g>
</svg>

<style>
	.outer-d-path {
		stroke: theme('colors.primary');
	}

	.head-circle,
	.tail-circle {
		stroke: theme('colors.current');
	}

	.inner-d {
		fill: theme('colors.current');
	}

	.small-circle,
	.medium-circle {
		fill: theme('colors.current');
	}

	.large-cirlce {
		fill: theme('colors.secondary');
	}
</style>
