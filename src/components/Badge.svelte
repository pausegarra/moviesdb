<script>
	import { text } from "svelte/internal";


  export let movieType
  export let textSize = "xs"

  let colors = {
		movie: "blue",
		series: "gray",
		episode: "purple",
	}

  $: color = colors[movieType]
</script>

<span class="bg-{color}-200 text-{color}-800 px-2.5 rounded py-1 text-{textSize}">{movieType}</span>