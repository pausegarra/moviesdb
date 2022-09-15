<script>
  export let error

	const messages = {
		"Incorrect IMDb ID.": "",
		"Too many results.": "Please be more specific with your search.",
    "Movie not found!": "Movie not found!"
	}
</script>

<div class="flex w-full justify-center">
	{messages[error]}
</div>