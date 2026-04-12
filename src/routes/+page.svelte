<script lang="ts">
  import { products } from '$lib/data/products';
  import ProductCard from '$lib/components/product-card.svelte';
  import { ArrowRight, Package, ShieldCheck, Recycle, Smiley, Tag, Code, UsersThree } from 'phosphor-svelte';

  const featured = products.filter(p => p.inStock).slice(0, 6);

  const categories = [
    { name: 'Tech & Geek', emoji: '💻', color: 'from-blue-500/20 to-indigo-500/20', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-700', desc: 'Para developers e geeks' },
    { name: 'Personagens',  emoji: '🧙', color: 'from-violet-500/20 to-purple-500/20',  border: 'border-violet-200',  badge: 'bg-violet-100 text-violet-700',  desc: 'Ícones pop culture' },
    { name: 'Animais',      emoji: '🐼', color: 'from-emerald-500/20 to-teal-500/20',   border: 'border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', desc: 'O reino animal' },
    { name: 'Festividades', emoji: '🎄', color: 'from-orange-500/20 to-amber-500/20',   border: 'border-orange-200',  badge: 'bg-orange-100 text-orange-700',  desc: 'Edições sazonais' },
    { name: 'Portugal',     emoji: '🇵🇹', color: 'from-red-500/20 to-rose-500/20',      border: 'border-red-200',     badge: 'bg-red-100 text-red-700',        desc: 'Orgulhosamente PT' },
  ].map(c => ({
    ...c,
    count: products.filter(p => p.category === c.name).length,
  }));
</script>

<svelte:head>
  <title>Duck Shop | Patos de Borracha Temáticos | Porto, Portugal</title>
  <meta name="description" content="A maior coleção de patos de borracha temáticos de Portugal. Tech ducks, personagens famosos, edições Portugal e muito mais. Envio para todo o mundo. Porto, Portugal." />
</svelte:head>

<!-- Hero -->
<section class="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-background via-primary/5 to-accent/5">
  <div class="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]"></div>

  <div class="container relative mx-auto px-4 py-20 md:py-36">
    <div class="mx-auto max-w-4xl text-center">
      <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm animate-slide-down">
        <span class="text-base">🦆</span>
        <span>Novidades toda semana · Porto, Portugal</span>
      </div>

      <h1 class="mb-6 text-balance text-5xl font-extrabold tracking-tight md:text-7xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <span class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
          Encontra o pato
        </span>
        <br />
        <span class="text-foreground">que fala contigo.</span>
      </h1>

      <p class="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl mx-auto">
        Patos de borracha com personalidade. Para developers, coleccionadores e quem quer uma lembrança de Portugal diferente.
      </p>

      <div class="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href="/produtos"
          class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95"
        >
          <span>Ver Catálogo</span>
          <ArrowRight size={20} weight="bold" class="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
        <a
          href="/produtos?novo=true"
          class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/60 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95"
        >
          Novidades da Semana
        </a>
      </div>
    </div>
  </div>

  <!-- Trust badges -->
  <div class="border-t border-border/40 bg-background/60 backdrop-blur-sm">
    <div class="container mx-auto px-4 py-8">
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Package size={24} weight="duotone" />
          </div>
          <div>
            <h3 class="font-semibold text-sm">Envio para PT e BR</h3>
            <p class="text-xs text-muted-foreground">Entrega em 3–5 dias úteis</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <ShieldCheck size={24} weight="duotone" />
          </div>
          <div>
            <h3 class="font-semibold text-sm">Compra 100% Segura</h3>
            <p class="text-xs text-muted-foreground">Pagamento encriptado</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
            <Recycle size={24} weight="duotone" />
          </div>
          <div>
            <h3 class="font-semibold text-sm">Embalagem Sustentável</h3>
            <p class="text-xs text-muted-foreground">Caixas recicladas com surpresa</p>
          </div>
        </div>
        <div class="flex items-center gap-3">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600">
            <Smiley size={24} weight="duotone" />
          </div>
          <div>
            <h3 class="font-semibold text-sm">Garantia Quack</h3>
            <p class="text-xs text-muted-foreground">Não gostou? 30 dias para devolver</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Produtos em destaque -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        Patos em Destaque
      </h2>
      <p class="text-lg text-muted-foreground">
        Selecionados especialmente para ti
      </p>
    </div>

    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {#each featured as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    <div class="mt-12 text-center">
      <a
        href="/produtos"
        class="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-8 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105"
      >
        Ver todos os patos
        <ArrowRight size={18} weight="bold" class="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </div>
</section>

<!-- Categorias -->
<section class="border-t border-border/40 py-20">
  <div class="container mx-auto px-4">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          Explora por categoria
        </h2>
        <p class="mt-2 text-muted-foreground">Cada categoria, um universo diferente.</p>
      </div>
      <a href="/produtos" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4">
        Ver todos <ArrowRight size={14} weight="bold" />
      </a>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
      {#each categories as cat}
        <a
          href={`/produtos?categoria=${encodeURIComponent(cat.name)}`}
          class="group flex flex-col items-center gap-3 rounded-2xl border bg-gradient-to-br p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg {cat.border} {cat.color}"
        >
          <span class="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
            {cat.emoji}
          </span>
          <div>
            <p class="font-bold text-sm text-foreground">{cat.name}</p>
            <p class="text-xs text-muted-foreground mt-0.5">{cat.desc}</p>
          </div>
          <span class="rounded-full px-2.5 py-0.5 text-xs font-semibold {cat.badge}">
            {cat.count} patos
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Porquê a Duck Shop -->
<section class="border-t border-border/40 bg-gradient-to-br from-muted/30 to-background py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        Porquê a Duck Shop?
      </h2>
      <p class="text-lg text-muted-foreground max-w-xl mx-auto">
        Não somos uma loja de brinquedos. Somos uma loja de personalidades.
      </p>
    </div>

    <div class="grid gap-8 md:grid-cols-3">
      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Code size={28} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Para developers</h3>
        <p class="leading-relaxed text-muted-foreground">
          O rubber duck debugging é real. Ter um pato do lado resolve bugs. Acreditamos nisso com toda a seriedade — e com muito bom humor.
        </p>
      </div>

      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Tag size={28} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Para coleccionadores</h3>
        <p class="leading-relaxed text-muted-foreground">
          Cada edição é limitada. Cada pato, único. A tua prateleira merece mais personalidade do que uma fileira de patinhos amarelos genéricos.
        </p>
      </div>

      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
        <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <UsersThree size={28} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Para turistas</h3>
        <p class="leading-relaxed text-muted-foreground">
          Leva um bocado do Porto contigo. Os nossos patos Portugal são a lembrança que ninguém esperava — e toda a gente quer.
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
</style>
