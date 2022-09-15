<script>
  export let movieType

  let colors = {
		movie: "blue",
		series: "gray",
		episode: "purple",
	}

  $: color = colors[movieType]
</script>

<span class="bg-{color}-200 text-{color}-800 px-2.5 rounded py-1 text-xs">{movieType}</span>