<script lang="ts">
  import { ArrowRight, Smiley, Star, Heart, MapPin, Bird, Bug, CheckCircle } from 'phosphor-svelte';
</script>

<svelte:head>
  <title>Sobre Nós | A História da Duck Shop</title>
  <meta name="description" content="Nascida no Porto, Portugal, a Duck Shop transforma o humilde patinho de borracha num objeto de cultura, humor e identidade. Descobre a nossa história." />
</svelte:head>

<!-- Hero -->
<section class="border-b border-border/40 py-24">
  <div class="container mx-auto px-4 text-center max-w-3xl">
    <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
      <MapPin size={16} weight="duotone" />
      <span>Porto, Portugal · Desde 2024</span>
    </div>
    <h1 class="mb-6 text-5xl font-extrabold tracking-tight md:text-6xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      Mais do que um pato.
      <br />
      <span class="text-primary">
        Uma personalidade.
      </span>
    </h1>
    <p class="text-lg leading-relaxed text-muted-foreground md:text-xl">
      A Duck Shop nasceu no Porto com uma missão simples: transformar o humilde patinho de borracha num objeto de cultura, humor e identidade.
    </p>
  </div>
</section>

<!-- A nossa história -->
<section class="py-20">
  <div class="container mx-auto px-4">
    <div class="mx-auto max-w-4xl">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div>
          <span class="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">A Nossa História</span>
          <h2 class="mb-6 text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            Tudo começou com um bug e um pato.
          </h2>
          <div class="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Em 2024, um developer portuense estava a debuggar um problema há horas. Sem solução à vista, pegou no patinho de borracha da secretária e começou a explicar o problema em voz alta — ao pato.
            </p>
            <p>
              O bug foi resolvido em minutos. E nasceu a ideia: e se esses patos pudessem ter mais personalidade? E se cada um contasse uma história diferente?
            </p>
            <p>
              Hoje, a Duck Shop tem mais de 25 patos temáticos — de developers a personagens pop culture, de animais a edições exclusivas de Portugal.
            </p>
          </div>
        </div>
        <div class="relative">
          <div class="rounded-3xl bg-muted/40 p-12 text-center border border-border/50">
            <div class="mb-4 flex justify-center text-primary animate-float">
              <Bird size={96} weight="duotone" />
            </div>
            <p class="text-sm font-medium text-muted-foreground italic">
              "O primeiro pato. A primeira solução."
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Porquê um pato? -->
<section class="border-t border-border/40 bg-muted/20 py-20">
  <div class="container mx-auto px-4">
    <div class="mx-auto max-w-4xl">
      <div class="grid gap-12 md:grid-cols-2 items-center">
        <div class="rounded-3xl border border-border/50 bg-card p-8 shadow-sm">
          <div class="mb-4 flex items-center gap-2 text-muted-foreground">
            <Bug size={32} weight="duotone" class="text-orange-500" />
            <ArrowRight size={18} weight="bold" />
            <CheckCircle size={32} weight="duotone" class="text-emerald-500" />
          </div>
          <h3 class="mb-3 text-xl font-bold">O que é o Rubber Duck Debugging?</h3>
          <p class="text-muted-foreground leading-relaxed">
            É uma técnica real usada por programadores de todo o mundo. Ao explicar o código ao pato em voz alta, o cérebro é forçado a articular o problema de forma diferente — e frequentemente encontra a solução sozinho.
          </p>
          <p class="mt-3 text-muted-foreground leading-relaxed">
            O pato não diz nada. Mas ouve tudo. E isso é suficiente.
          </p>
        </div>
        <div>
          <span class="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">Porquê um Pato?</span>
          <h2 class="mb-6 text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            Porque um pato nunca te julga.
          </h2>
          <p class="text-muted-foreground leading-relaxed">
            Num mundo de code reviews, deploys falhados e deadlines impossíveis, ter um parceiro silencioso na secretária faz toda a diferença. O nosso Debug Duck foi desenhado exactamente para isso — mas com muito mais estilo.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Feito com amor no Porto -->
<section class="py-20">
  <div class="container mx-auto px-4 text-center max-w-3xl">
    <span class="mb-4 block text-sm font-semibold uppercase tracking-widest text-primary">Feito com amor no Porto</span>
    <h2 class="mb-6 text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      Orgulhosamente português.
    </h2>
    <p class="text-muted-foreground leading-relaxed text-lg mb-8">
      Os nossos patos Portugal são mais do que uma lembrança turística — são uma declaração de identidade. Do Porto Duck ao Fado Duck, cada edição celebra uma faceta da cultura portuguesa com o nosso humor característico.
    </p>
    <div class="flex items-center justify-center gap-3 text-muted-foreground">
      <MapPin size={20} weight="duotone" class="text-primary" />
      <span>Concebido e distribuído do Porto para o mundo</span>
    </div>
  </div>
</section>

<!-- Valores -->
<section class="border-t border-border/40 bg-muted/20 py-20">
  <div class="container mx-auto px-4">
    <div class="mb-12 text-center">
      <h2 class="text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        O que nos move
      </h2>
    </div>
    <div class="mx-auto max-w-4xl grid gap-6 md:grid-cols-3">
      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <div class="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <Smiley size={32} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Humor</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Levamos os patos a sério. Tudo o resto não tanto. O humor é o fio condutor de tudo o que fazemos.
        </p>
      </div>
      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <div class="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent">
          <Star size={32} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Qualidade</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          Borracha BPA-free, pinturas resistentes, embalagem sustentável. O pato que recebes é para durar anos.
        </p>
      </div>
      <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm text-center transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
        <div class="mb-5 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100 text-red-600">
          <Heart size={32} weight="duotone" />
        </div>
        <h3 class="mb-3 text-xl font-bold">Comunidade</h3>
        <p class="text-sm text-muted-foreground leading-relaxed">
          De developers a colecionadores, os nossos clientes formam uma comunidade unida pelo amor aos patos.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CTA final -->
<section class="py-20 text-center">
  <div class="container mx-auto px-4 max-w-2xl">
    <div class="mb-6 flex justify-center text-primary">
      <Bird size={72} weight="duotone" />
    </div>
    <h2 class="mb-4 text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">
      Encontra o teu pato.
    </h2>
    <p class="mb-8 text-muted-foreground text-lg">
      25+ patos à tua espera. Algures no catálogo está o que fala contigo.
    </p>
    <a
      href="/produtos"
      class="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white shadow-md transition-colors duration-200 hover:bg-primary/90"
    >
      Ver Catálogo Completo
      <ArrowRight size={20} weight="bold" class="transition-transform group-hover:translate-x-1" />
    </a>
  </div>
</section>
