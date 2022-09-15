<script>
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<div class="container mx-auto py-9 px-4 md:px-0">
  <h1 class="text-5xl mb-9 font-bold text-center">{data.Title}</h1>

  <div class="columns-2 p-8 bg-white rounded">
    <div class="flex justify-center items-center">
      <img src={data.Poster} alt="">
    </div>
    <div class="flex justify-center">
    </div>
  </div>
</div>