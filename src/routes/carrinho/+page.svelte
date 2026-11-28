<script lang="ts">
  import { cart } from '$lib/stores/cart.svelte';
  import { Trash, Plus, Minus, ShoppingBag, Tag, ArrowRight, Truck, Ticket, CheckCircle } from 'phosphor-svelte';

  const formatPrice = (price: number) =>
    price.toLocaleString('pt-PT', { style: 'currency', currency: 'EUR' });

  let couponCode = $state('');
  let couponApplied = $state(false);
  let couponError = $state(false);
  const DISCOUNT_RATE = 0.10;

  function applyCoupon() {
    if (couponCode.trim().toUpperCase() === 'DUCK10') {
      couponApplied = true;
      couponError = false;
    } else {
      couponApplied = false;
      couponError = true;
      setTimeout(() => { couponError = false; }, 3000);
    }
  }

  function removeCoupon() {
    couponApplied = false;
    couponCode = '';
  }

  const discount = $derived(couponApplied ? cart.totalPrice * DISCOUNT_RATE : 0);
  const total = $derived(cart.totalPrice - discount);
</script>

<svelte:head>
  <title>Carrinho | Duck Shop</title>
</svelte:head>

<div class="container mx-auto px-4 py-8 md:py-12">
  <div class="mb-10">
    <h1 class="mb-2 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      Carrinho de Compras
    </h1>
    <p class="text-muted-foreground">
      {cart.totalItems} {cart.totalItems === 1 ? 'item' : 'itens'} no teu carrinho
    </p>
  </div>

  {#if cart.items.length === 0}
    <div class="flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-muted/30 py-20 text-center">
      <div class="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
        <ShoppingBag size={48} weight="duotone" class="text-primary" />
      </div>
      <h2 class="mb-3 text-2xl font-bold">O teu carrinho está vazio</h2>
      <p class="mb-8 max-w-md text-muted-foreground">
        Explora a nossa coleção e encontra patos incríveis para adicionar ao carrinho.
      </p>
      <a
        href="/produtos"
        class="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary/90"
      >
        <span>Ver Catálogo</span>
        <ArrowRight size={20} weight="bold" class="transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  {:else}
    <div class="grid gap-8 lg:grid-cols-3">
      <!-- Cart items -->
      <div class="lg:col-span-2">
        <div class="space-y-4">
          {#each cart.items as item (item.product.id)}
            <div class="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md">
              <div class="flex gap-5">
                <!-- Thumbnail -->
                <a href={`/produto/${item.product.id}`} class="shrink-0">
                  <div class="h-24 w-24 overflow-hidden rounded-xl bg-muted flex items-center justify-center">
                    {#if item.product.emoji}
                      <span class="text-5xl select-none">{item.product.emoji}</span>
                    {:else}
                      <img
                        src={item.product.image || "/duck.svg"}
                        alt={item.product.name}
                        class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    {/if}
                  </div>
                </a>

                <!-- Info -->
                <div class="flex flex-1 flex-col min-w-0">
                  <a href={`/produto/${item.product.id}`} class="mb-1 font-bold transition-colors hover:text-primary truncate">
                    {item.product.name}
                  </a>
                  <p class="mb-3 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Tag size={12} weight="regular" />
                    {item.product.category}
                  </p>
                  <p class="text-lg font-bold text-primary">
                    {formatPrice(item.product.price * item.quantity)}
                  </p>
                  {#if item.quantity > 1}
                    <p class="text-xs text-muted-foreground">{formatPrice(item.product.price)} cada</p>
                  {/if}
                </div>

                <!-- Quantity + delete -->
                <div class="flex flex-col items-end justify-between shrink-0">
                  <button
                    onclick={() => cart.removeItem(item.product.id)}
                    class="rounded-lg p-1.5 text-muted-foreground transition-all duration-200 hover:bg-red-50 hover:text-red-500"
                    aria-label="Remover"
                  >
                    <Trash size={18} weight="regular" />
                  </button>

                  <div class="flex items-center gap-2 rounded-xl border border-border bg-muted/50 p-1">
                    <button
                      onclick={() => cart.updateQuantity(item.product.id, item.quantity - 1)}
                      class="flex h-8 w-8 items-center justify-center rounded-lg transition-all hover:bg-background hover:text-primary active:scale-95"
                    >
                      <Minus size={14} weight="regular" />
                    </button>
                    <span class="w-6 text-center font-bold text-sm">{item.quantity}</span>
                    <button
                      onclick={() => cart.updateQuantity(item.product.id, item.quantity + 1)}
                      class="flex h-8 w-8 items-center justify-center rounded-lg transition-all hover:bg-background hover:text-primary active:scale-95"
                    >
                      <Plus size={14} weight="regular" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>

        <button
          onclick={() => cart.clearCart()}
          class="mt-6 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-red-500"
        >
          Limpar carrinho
        </button>

        <!-- Coupon section -->
        <div class="mt-8 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 class="mb-4 flex items-center gap-2 font-bold">
            <Ticket size={18} weight="duotone" class="text-primary" />
            Cupão de desconto
          </h3>
          {#if couponApplied}
            <div class="flex items-center justify-between rounded-xl bg-accent/10 border border-accent/30 px-4 py-3">
              <div class="flex items-center gap-2 text-accent font-semibold text-sm">
                <CheckCircle size={16} weight="duotone" />
                <span>DUCK10 aplicado — 10% de desconto!</span>
              </div>
              <button onclick={removeCoupon} class="text-xs text-muted-foreground hover:text-foreground underline">Remover</button>
            </div>
          {:else}
            <div class="flex gap-3">
              <input
                type="text"
                placeholder="Código do cupão (ex: DUCK10)"
                bind:value={couponCode}
                onkeydown={(e) => e.key === 'Enter' && applyCoupon()}
                class="flex-1 rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
              <button
                onclick={applyCoupon}
                class="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 active:scale-95"
              >
                Aplicar
              </button>
            </div>
            {#if couponError}
              <p class="mt-2 text-xs text-red-500">Cupão inválido. Experimenta "DUCK10" para 10% off.</p>
            {/if}
          {/if}
        </div>

        <!-- Delivery estimate -->
        <div class="mt-4 flex items-center gap-3 rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-muted-foreground">
          <Truck size={20} weight="duotone" class="text-primary shrink-0" />
          <span>Estimativa de entrega: <strong class="text-foreground">3–5 dias úteis</strong> · Portugal e Brasil</span>
        </div>
      </div>

      <!-- Order summary -->
      <div class="lg:col-span-1">
        <div class="sticky top-24 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          <div class="border-b border-border p-6">
            <h2 class="text-xl font-bold" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              Resumo do pedido
            </h2>
          </div>

          <div class="p-6">
            <div class="mb-6 space-y-3">
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Subtotal</span>
                <span class="font-semibold">{formatPrice(cart.totalPrice)}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Envio</span>
                <span class="font-semibold text-emerald-600">Grátis</span>
              </div>
              {#if couponApplied}
                <div class="flex justify-between text-sm">
                  <span class="text-muted-foreground">Desconto (DUCK10)</span>
                  <span class="font-semibold text-accent">- {formatPrice(discount)}</span>
                </div>
              {/if}
            </div>

            <div class="mb-6 border-t border-border pt-4">
              <div class="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span class="text-primary">
                  {formatPrice(total)}
                </span>
              </div>
              {#if couponApplied}
                <p class="mt-1 flex items-center justify-end gap-1 text-xs text-accent">
                <CheckCircle size={12} weight="duotone" />
                Poupaste {formatPrice(discount)}!
              </p>
              {/if}
            </div>

            <button
              disabled
              title="Checkout em breve"
              class="mb-4 flex w-full cursor-not-allowed items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-base font-bold text-white shadow-md shadow-primary/20 opacity-50"
            >
              <span>Finalizar Compra</span>
              <ArrowRight size={20} weight="bold" />
            </button>

            <a
              href="/produtos"
              class="block rounded-xl border-2 border-border bg-background px-4 py-3 text-center text-sm font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/5"
            >
              Continuar a comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
