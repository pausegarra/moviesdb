<script>
	export let page
	export let setPage
</script>

<button
	class={`bg-gradient-to-br from-blue-900 to-purple-500 hover:to-purple-300 px-2 py-1 rounded text-white text-xl`}
	on:click={() => setPage(page)}
>
	<slot />
</button>
