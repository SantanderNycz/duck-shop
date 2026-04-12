<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/header.svelte';
  import Footer from '$lib/components/footer.svelte';
  import Toast from '$lib/components/toast.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen flex-col">
  <Header />
  <main class="flex-1">
    {@render children()}
  </main>
  <Footer />
</div>

<Toast />
