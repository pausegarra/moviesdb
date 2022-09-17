<script>
  import {tweened} from 'svelte/motion'
  import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';
  import {beforeNavigate, afterNavigate} from '$app/navigation'

  let navigating = false

  const progress = tweened(0, {
    duration: 3500,
    easing: cubicOut
  })

  beforeNavigate(() => {
    navigating = true
    progress.set(0.1)
  })
  afterNavigate(() => {
    navigating = false
    progress.set(1)
  })

  onMount(() => progress.set(0.7))
</script>

{#if navigating}
  <div class="progress-bar w-full bg-gray-200 h-1">
    <div class="progress-sliver bg-[#00004c] h-full" style="--width: {$progress * 100}%"></div>
  </div>
{/if}

<style>
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
  }
  .progress-sliver {
    width: var(--width);
  }
</style>