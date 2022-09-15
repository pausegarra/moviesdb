<script>
	import Movie from "./Movie.svelte";

  export let movies = {}
</script>

<div class="columns-3xs">
  {#each movies.Search as movie}
    <Movie {movie} />
  {/each}
</div>