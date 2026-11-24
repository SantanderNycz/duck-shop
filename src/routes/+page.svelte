<script lang="ts">
  import { products } from '$lib/data/products';
  import ProductCard from '$lib/components/product-card.svelte';
  import { ArrowRight, Package, ShieldCheck, Recycle, Smiley, Tag, Code, UsersThree, Bird, Laptop, Crown, Butterfly, Gift, Flag } from 'phosphor-svelte';

  const featured = products.filter(p => p.inStock).slice(0, 6);

  const categories = [
    { name: 'Tech & Geek', icon: Laptop,    iconColor: 'text-blue-500',    desc: 'Para developers e geeks' },
    { name: 'Personagens',  icon: Crown,     iconColor: 'text-violet-500',  desc: 'Ícones pop culture' },
    { name: 'Animais',      icon: Butterfly, iconColor: 'text-emerald-500', desc: 'O reino animal' },
    { name: 'Festividades', icon: Gift,      iconColor: 'text-orange-500',  desc: 'Edições sazonais' },
    { name: 'Portugal',     icon: Flag,      iconColor: 'text-red-500',     desc: 'Orgulhosamente PT' },
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
<section class="border-b border-border/40 bg-background">
  <div class="container mx-auto px-4 py-20 md:py-28">
    <div class="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">

      <!-- Text -->
      <div>
        <p class="mb-5 text-sm font-semibold uppercase tracking-widest text-muted-foreground">
          Porto, Portugal
        </p>

        <h1 class="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-6xl lg:text-7xl">
          Patos com<br/>
          <span class="text-primary">personalidade.</span>
        </h1>

        <p class="mb-10 max-w-md text-lg leading-relaxed text-muted-foreground">
          Para developers, colecionadores e quem quer uma lembrança de Portugal diferente.
        </p>

        <div class="flex flex-wrap gap-3">
          <a
            href="/produtos"
            class="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition-colors duration-200 hover:bg-primary/90"
          >
            Explorar catálogo
            <ArrowRight size={16} weight="bold" />
          </a>
          <a
            href="/sobre"
            class="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3.5 text-sm font-semibold transition-colors duration-200 hover:border-foreground/30 hover:bg-muted/50"
          >
            A nossa história
          </a>
        </div>
      </div>

      <!-- Visual -->
      <div class="flex justify-center md:justify-end">
        <div class="relative">
          <div class="flex h-72 w-72 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-primary/8 to-accent/8 ring-1 ring-border md:h-80 md:w-80">
            <span class="animate-float select-none text-[9rem]">🦆</span>
          </div>
          <!-- Floating cards -->
          <div class="absolute -right-5 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
            <p class="text-xs text-muted-foreground">Avaliação média</p>
            <p class="text-xl font-bold">4.9 ⭐</p>
          </div>
          <div class="absolute -left-5 bottom-10 rounded-2xl border border-border bg-card px-4 py-3 shadow-lg">
            <p class="text-xs text-muted-foreground">Patos disponíveis</p>
            <p class="text-xl font-bold">{products.length}+</p>
          </div>
        </div>
      </div>

    </div>
  </div>

  <!-- Trust strip -->
  <div class="border-t border-border/40">
    <div class="container mx-auto px-4 py-5">
      <div class="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground md:gap-10">
        <div class="flex items-center gap-2">
          <Package size={15} weight="duotone" class="text-primary" />
          <span>Envio PT & BR · 3–5 dias</span>
        </div>
        <div class="hidden h-3.5 w-px bg-border sm:block"></div>
        <div class="flex items-center gap-2">
          <ShieldCheck size={15} weight="duotone" class="text-primary" />
          <span>Pagamento encriptado</span>
        </div>
        <div class="hidden h-3.5 w-px bg-border sm:block"></div>
        <div class="flex items-center gap-2">
          <Recycle size={15} weight="duotone" class="text-primary" />
          <span>Embalagem sustentável</span>
        </div>
        <div class="hidden h-3.5 w-px bg-border sm:block"></div>
        <div class="flex items-center gap-2">
          <Smiley size={15} weight="duotone" class="text-primary" />
          <span>Devolução em 30 dias</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Produtos em destaque -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Destaques</p>
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          Patos da semana
        </h2>
      </div>
      <a href="/produtos" class="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 sm:inline-flex">
        Ver todos <ArrowRight size={14} weight="bold" />
      </a>
    </div>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {#each featured as product (product.id)}
        <ProductCard {product} />
      {/each}
    </div>

    <div class="mt-10 sm:hidden">
      <a
        href="/produtos"
        class="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline underline-offset-4"
      >
        Ver todos os patos <ArrowRight size={14} weight="bold" />
      </a>
    </div>
  </div>
</section>

<!-- Categorias -->
<section class="border-t border-border/40 py-20">
  <div class="container mx-auto px-4">
    <div class="mb-10 flex items-end justify-between">
      <div>
        <p class="mb-2 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Coleção</p>
        <h2 class="text-3xl font-bold tracking-tight md:text-4xl">
          Explora por categoria
        </h2>
      </div>
      <a href="/produtos" class="hidden items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 sm:inline-flex">
        Ver todos <ArrowRight size={14} weight="bold" />
      </a>
    </div>

    <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {#each categories as cat}
        <a
          href={`/produtos?categoria=${encodeURIComponent(cat.name)}`}
          class="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.03] hover:shadow-sm"
        >
          <span class="transition-transform duration-200 group-hover:scale-105 {cat.iconColor}">
            <svelte:component this={cat.icon} size={28} weight="duotone" />
          </span>
          <div>
            <p class="font-bold text-sm text-foreground">{cat.name}</p>
            <p class="mt-0.5 text-xs text-muted-foreground">{cat.desc}</p>
          </div>
          <span class="mt-auto text-xs font-medium text-muted-foreground">
            {cat.count} patos
          </span>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Porquê a Duck Shop -->
<section class="border-t border-border/40 bg-muted/20 py-20">
  <div class="container mx-auto px-4">
    <div class="grid gap-16 md:grid-cols-2 md:items-start">

      <!-- Declaração -->
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-widest text-muted-foreground">Sobre nós</p>
        <h2 class="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl">
          Não somos uma loja<br/>de brinquedos.
        </h2>
        <p class="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
          Somos uma loja de personalidades. Cada pato é escolhido a dedo — para o teu desk, a tua prateleira, ou para alguém que merece um presente que ninguém esperava.
        </p>
        <a href="/sobre" class="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline underline-offset-4">
          A nossa história <ArrowRight size={14} weight="bold" />
        </a>
      </div>

      <!-- Lista -->
      <div class="space-y-8 md:pt-14">
        <div class="flex gap-5">
          <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Code size={20} weight="duotone" />
          </div>
          <div>
            <h3 class="mb-1.5 font-bold">Para developers</h3>
            <p class="text-sm leading-relaxed text-muted-foreground">Rubber duck debugging é ciência. Um pato do lado resolve bugs — e é mais barato que terapia.</p>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Tag size={20} weight="duotone" />
          </div>
          <div>
            <h3 class="mb-1.5 font-bold">Para colecionadores</h3>
            <p class="text-sm leading-relaxed text-muted-foreground">Edições limitadas. A tua prateleira merece mais personalidade do que fileiras de patinhos amarelos genéricos.</p>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-500">
            <UsersThree size={20} weight="duotone" />
          </div>
          <div>
            <h3 class="mb-1.5 font-bold">Para turistas</h3>
            <p class="text-sm leading-relaxed text-muted-foreground">A lembrança do Porto que ninguém esperava — e toda a gente quer ter.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
