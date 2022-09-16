<script>
	export let page
	export let setPage
</script>

<button
	class={`bg-gray-900 hover:bg-gray-500 ease-in-out duration-200 px-2 py-1 rounded text-white text-xl`}
	on:click={() => setPage(page)}
>
	<slot />
</button>
