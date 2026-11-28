<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Toast from '$lib/components/toast.svelte';
  import { page } from '$app/stores';
  import { fade } from 'svelte/transition';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {#key $page.url.pathname}
      <div in:fade={{ duration: 150 }} out:fade={{ duration: 80 }}>
        {@render children()}
      </div>
    {/key}
  </main>
  <Footer />
</div>

<Toast />
