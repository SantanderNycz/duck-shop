<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Toast from '$lib/components/toast.svelte';
  import { navigating } from '$app/stores';
  import { fade } from 'svelte/transition';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {#key $navigating?.to?.url.pathname ?? 'home'}
      <div in:fade={{ duration: 180, delay: 80 }} out:fade={{ duration: 100 }}>
        {@render children()}
      </div>
    {/key}
  </main>
  <Footer />
</div>

<Toast />
