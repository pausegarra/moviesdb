<script>
	import MoviesGrid from "../components/MoviesGrid.svelte"
	import SearchBar from "../components/SearchBar.svelte"
  import Error from '../components/Error.svelte'
  import Spinner from '../components/Spinner.svelte'
  
  let search = ""
  $: movies = getMovies(search)

  async function getMovies(search) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=11aa9d2f&s=${search}`)
    const data = await res.json()
    return data
  }

  function setSearch(e) {
    search = e.target.value
  }
</script>

<div class="container mx-auto py-9 px-4 md:px-0">
		<h1 class="text-center text-4xl mb-9">
			movies<span class="font-bold">db</span>
		</h1>

    <SearchBar {setSearch} />

		{#await movies}
    <Spinner />
		{:then movies}
      {#if movies.Response === 'False'}
        <Error error={movies.Error} />
      {:else}
        <MoviesGrid movies={movies.Search} />
      {/if}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>