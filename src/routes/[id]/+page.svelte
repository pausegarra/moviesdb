<script>
	import Badge from '../../components/Badge.svelte';

  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto py-9 px-4 md:px-0">
  <h1 class="text-5xl mb-9 font-bold text-center">{data.Title}</h1>

  <div class="grid gird-cols-1 lg:grid-cols-2 p-8 bg-white rounded">
    <div class="flex justify-center items-center">
      <img src={data.Poster} class="rounded" alt="">
    </div>
    <div>
      <h2 class="text-3xl mb-4">Movie data</h2>
      <p>
        <span class="bg-red-200 text-red-800 px-2.5 rounded py-1 text-md">{data.Year}</span>
        <Badge movieType={data.Type} textSize="md" />
      </p>
      <p class="mt-5">
        <strong>Release:</strong> {data.Released}
      </p>
      <p>
        <strong>Duration:</strong> {data.Runtime}
      </p>
      <p>
       <strong>Genre:</strong> {data.Genre}
      </p>
      <p>
        <strong>Director:</strong> {data.Director}
      </p>
      <p>
        <strong>Actors:</strong> {data.Actors}
      </p>
      <p>
        <strong>Plot: </strong> {data.Plot}
      </p>
      <p>
        <strong>Language:</strong> {data.Language}
      </p>
      <p>
        <strong>Country:</strong> {data.Country}
      </p>
      <p>
        <strong>Awards:</strong> {data.Awards}
      </p>
      {#if data.BoxOffice}
        <p>
          <strong>Budget: </strong> {data.BoxOffice}
        </p>
      {/if}

      <div class="h-[1px] bg-gray-200 my-4"></div>

      <div>
        <h2 class="text-3xl mb-4">Ratings</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {#each data.Ratings as rating}
            <div class="flex flex-col justify-center items-center">
              <span class="text-center">{rating.Source}</span>
              <span>{rating.Value}</span>
            </div>
          {/each}
          <div class="flex flex-col justify-center items-center">
            <span>Metascore</span>
            <span>{data.Metascore}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span>imDB Rating</span>
            <span>{data.imdbRating}</span>
          </div>
          <div class="flex flex-col justify-center items-center">
            <span>imDB Votes</span>
            <span>{data.imdbVotes}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>