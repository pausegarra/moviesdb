<script>
  export let movie = {}
  let color = {
		movie: "blue",
		series: "gray",
		episode: "purple",
	}
</script>

<div
	to={`${movie.imdbID}`}
	class="block bg-[#FFFFFF] hover:bg-[#F7CE68] ease-in-out duration-200 rounded-lg shadow-md mb-4 overflow-hidden"
>
	<img src={movie.Poster} alt="" class="w-full" />
	<div class="p-6">
			<span>{movie.Year}</span>
		<span
			class="bg-{color[movie.Type]}-200 text-{color[
				movie.Type
			]}-800 px-2.5 rounded py-1 text-xs">{movie.Type}</span
		>
		<h4 class="m-0 font-bold text-2xl">{movie.Title}</h4>
	</div>
</div>