<script>
	import Badge from "./Badge.svelte";

  export let movie = {}
  let color = {
		movie: "blue",
		series: "gray",
		episode: "purple",
	}
</script>

<a
	href={`${movie.imdbID}`}
	class="block bg-[#FFFFFF] hover:bg-[#000000]/25 ease-in-out duration-200 rounded-lg shadow-md mb-4 overflow-hidden"
>
	<img src={movie.Poster} alt="" class="w-full" />
	<div class="p-6">
    <span class="bg-red-200 text-red-800 px-2.5 rounded py-1 text-xs">{movie.Year}</span>
		<Badge movieType={movie.Type} />
		<h4 class="m-0 font-bold text-xl">{movie.Title}</h4>
	</div>
</a>