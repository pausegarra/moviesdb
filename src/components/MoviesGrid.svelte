<script>
	import Movie from "./Movie.svelte";

  export let movies = {}
</script>

{#each movies.Search as movie}
  <Movie {movie} />
{/each}