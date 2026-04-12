<script lang="ts">
  import { toasts } from '$lib/stores/toast';
  import { fly, scale } from 'svelte/transition';
  import { cubicOut } from 'svelte/easing';
  import { X } from 'phosphor-svelte';
</script>

<!-- Toast container — fixed bottom-right -->
<div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none" aria-live="polite">
  {#each $toasts as toast (toast.id)}
    <div
      class="pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-2xl shadow-black/10 min-w-[220px] max-w-[320px]"
      in:fly={{ y: 16, duration: 280, easing: cubicOut }}
      out:scale={{ start: 0.95, duration: 200, easing: cubicOut }}
    >
      <!-- Left accent bar -->
      <div class="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary to-accent"></div>

      <span class="text-xl shrink-0 ml-1">{toast.emoji}</span>

      <p class="flex-1 text-sm font-medium text-foreground leading-snug">
        {toast.message}
      </p>

      <button
        onclick={() => toasts.dismiss(toast.id)}
        class="shrink-0 rounded-md p-0.5 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Fechar"
      >
        <X size={14} weight="regular" />
      </button>
    </div>
  {/each}
</div>

<style>
  div[class*="fixed"] > div {
    position: relative;
  }
</style>
