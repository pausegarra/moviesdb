<script>
	export let setPage
	export let current
	export let totalResults

	$: pages = Math.ceil(totalResults / 10)
</script>

<div class="flex justify-center gap-5 py-5">
	<button page={1} on:click={() => setPage(1)}>First</button>
	<button page={current - 1} on:click={() => setPage(current - 1)}>Previous</button>
	<span class="text-xl flex justify-center items-center"
		>{current} / {pages}</span
	>
	<button page={current + 1} on:click={() => setPage(current + 1)}>Next</button>
	<button page={pages} on:click={() => setPage(pages)}>Last</button>
</div>
