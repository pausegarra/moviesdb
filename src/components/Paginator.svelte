<script>
	import Button from "./Button.svelte";


	export let setPage
	export let current
	export let totalResults

	$: pages = Math.ceil(totalResults / 10)
</script>

<div class="flex justify-center gap-5 py-5">
	<Button page={1} setPage={() => setPage(1)}>First</Button>
	<Button page={current - 1} setPage={() => setPage(current - 1)}>Previous</Button>
	<span class="text-xl flex justify-center items-center"
		>{current} / {pages}</span
	>
	<Button page={current + 1} setPage={() => setPage(current + 1)}>Next</Button>
	<Button page={pages} setPage={() => setPage(pages)}>Last</Button>
</div>
