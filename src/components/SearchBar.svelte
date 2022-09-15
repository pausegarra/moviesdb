<script>
  export let setSearch
</script>

<div class="py-5">
  <input type="text" on:input={setSearch} class="w-full py-1 px-2" placeholder="Start typing to search!" />
</div>