<script lang="ts">
  import { FacebookLogo, InstagramLogo, EnvelopeSimple, MapPin, Bird, CheckCircle } from 'phosphor-svelte';

  let email = $state('');
  let subscribed = $state(false);

  function handleNewsletter(e: Event) {
    e.preventDefault();
    if (email.trim()) {
      subscribed = true;
      email = '';
    }
  }
</script>

<footer class="border-t border-border/40 bg-muted/20">
  <div class="container mx-auto px-4 py-16">
    <div class="grid gap-12 md:grid-cols-4">
      <!-- Brand -->
      <div class="md:col-span-2">
        <div class="mb-4 flex items-center gap-2.5">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg">
            <img src="/duck.svg" alt="Duck Shop" class="h-11 w-11" />
          </div>
          <span class="text-xl font-bold text-foreground" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            Duck Shop
          </span>
        </div>
        <p class="mb-2 max-w-sm leading-relaxed text-muted-foreground">
          Patos de borracha temáticos com personalidade. Para developers, coleccionadores e quem quer uma lembrança de Portugal diferente.
        </p>
        <div class="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">
          <MapPin size={12} weight="duotone" class="text-primary shrink-0" />
          <span>Porto, Portugal</span>
        </div>

        <!-- Socials -->
        <div class="flex gap-3">
          <a href="https://www.facebook.com/duckshop" aria-label="Facebook" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
            <FacebookLogo size={20} weight="fill" />
          </a>
          <a href="https://www.instagram.com/duckshop" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
            <InstagramLogo size={20} weight="fill" />
          </a>
          <a href="mailto:contato@duckshop.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-200 hover:bg-primary hover:text-white">
            <EnvelopeSimple size={20} weight="regular" />
          </a>
        </div>
      </div>

      <!-- Links -->
      <div>
        <h3 class="mb-5 font-bold">Links Rápidos</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="/" class="text-muted-foreground transition-colors hover:text-primary">Início</a></li>
          <li><a href="/produtos" class="text-muted-foreground transition-colors hover:text-primary">Catálogo</a></li>
          <li><a href="/sobre" class="text-muted-foreground transition-colors hover:text-primary">Sobre Nós</a></li>
          <li><a href="/carrinho" class="text-muted-foreground transition-colors hover:text-primary">Carrinho</a></li>
          <li><a href="/privacidade" class="text-muted-foreground transition-colors hover:text-primary">Privacidade</a></li>
        </ul>
      </div>

      <!-- Newsletter -->
      <div>
        <h3 class="mb-2 font-bold">Newsletter</h3>
        <p class="mb-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          Receber novidades de quack em quack
          <Bird size={14} weight="duotone" class="text-primary" />
        </p>
        {#if subscribed}
          <div class="flex items-center gap-2 rounded-xl bg-accent/10 border border-accent/30 p-4 text-sm text-accent font-medium">
            <CheckCircle size={18} weight="duotone" />
            Subscrito com sucesso!
          </div>
        {:else}
          <form onsubmit={handleNewsletter} class="space-y-2">
            <input
              type="email"
              placeholder="teu@email.com"
              bind:value={email}
              required
              class="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              class="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
            >
              Subscrever
            </button>
          </form>
        {/if}
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="mt-12 border-t border-border/40 pt-8 flex flex-col items-center justify-between gap-3 sm:flex-row text-sm text-muted-foreground">
      <p>© {new Date().getFullYear()} Duck Shop · Todos os direitos reservados.</p>
      <p>
        Desenvolvido por
        <a href="https://void-studio-vs.vercel.app/" class="text-accent hover:underline ml-1">Void Studio</a>
      </p>
    </div>
  </div>
</footer>
