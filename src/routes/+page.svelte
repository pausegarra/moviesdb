<script>
  let movies = getMovies()

  async function getMovies() {
    const res = await fetch(`https://www.omdbapi.com/?apikey=11aa9d2f&s=The 100`)
    const data = await res.json()
    return data
  }
</script>

<div class="container mx-auto py-9 px-4 md:px-0">
		<h1 class="text-center text-4xl mb-9">
			movies<span class="font-bold">db</span>
		</h1>

		{#await movies}
    Waiting...
		{:then movies}
      {#each movies.Search as movie}
        {movie.Title}
      {/each}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>