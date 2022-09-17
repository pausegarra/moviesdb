<svelte:head>
  <title>MoviesDB by Pau Segarra</title>
  <meta name="description" content="A simple web page where you can search for your favorite movie!">
</svelte:head>

<script>
	import MoviesGrid from "../components/MoviesGrid.svelte"
	import SearchBar from "../components/SearchBar.svelte"
  import Error from '../components/Error.svelte'
  import Spinner from '../components/Spinner.svelte'
  import Paginator from '../components/Paginator.svelte'
  
  let search = ""
  let page = 1
  $: movies = getMovies(search, page)

  async function getMovies(search, page) {
    const res = await fetch(`https://www.omdbapi.com/?apikey=11aa9d2f&s=${search}&page=${page}`)
    const data = await res.json()
    return data
  }

  function setSearch(e) {
    search = e.target.value
  }

  function setPage(newPage) {
    page = newPage
  }
</script>

<div class="container mx-auto py-9 px-4 md:px-0">
		<h1 class="text-center text-4xl mb-9 text-gray-900">
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
        <Paginator
					{setPage}
					current={page}
					totalResults={movies.totalResults}
				/>
      {/if}
		{:catch error}
			<p style="color: red">{error.message}</p>
		{/await}
	</div>