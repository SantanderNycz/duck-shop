<script lang="ts">
  import { ArrowLeft } from 'phosphor-svelte';
</script>

<svelte:head>
  <title>Política de Privacidade | Duck Shop</title>
  <meta name="description" content="Política de privacidade da Duck Shop. Saiba como tratamos os seus dados pessoais." />
</svelte:head>

<div class="container mx-auto max-w-3xl px-4 py-12 md:py-16">
  <a href="/" class="group mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all hover:bg-muted">
    <ArrowLeft size={16} weight="regular" class="transition-transform group-hover:-translate-x-1" />
    Voltar à loja
  </a>

  <h1 class="mb-2 text-4xl font-bold tracking-tight" style="font-family: 'Plus Jakarta Sans', sans-serif;">
    Política de Privacidade
  </h1>
  <p class="mb-10 text-sm text-muted-foreground">Última atualização: Janeiro de 2025</p>

  <div class="prose-duck space-y-8 text-muted-foreground leading-relaxed">

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">1. Quem somos</h2>
      <p>
        A Duck Shop é uma loja online de patos de borracha temáticos, sediada no Porto, Portugal.
        O responsável pelo tratamento dos seus dados pessoais é a Duck Shop
        (<a href="mailto:privacidade@duckshop.com" class="text-primary hover:underline">privacidade@duckshop.com</a>).
      </p>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">2. Dados que recolhemos</h2>
      <p>Recolhemos apenas os dados estritamente necessários para processar encomendas e melhorar a experiência de compra:</p>
      <ul class="mt-3 ml-5 list-disc space-y-1">
        <li>Nome e endereço de entrega</li>
        <li>Endereço de e-mail</li>
        <li>Dados de pagamento (processados de forma segura por terceiros — nunca armazenamos dados de cartão)</li>
        <li>Preferências de navegação anónimas para melhoria do serviço</li>
      </ul>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">3. Como usamos os seus dados</h2>
      <ul class="ml-5 list-disc space-y-1">
        <li>Processar e entregar as suas encomendas</li>
        <li>Enviar confirmações de compra e atualizações de envio</li>
        <li>Responder a questões de apoio ao cliente</li>
        <li>Enviar novidades (apenas com o seu consentimento expresso)</li>
      </ul>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">4. Os seus direitos (RGPD)</h2>
      <p>Ao abrigo do Regulamento Geral de Proteção de Dados, tem direito a:</p>
      <ul class="mt-3 ml-5 list-disc space-y-1">
        <li><strong class="text-foreground">Acesso</strong> — saber quais os dados que temos sobre si</li>
        <li><strong class="text-foreground">Retificação</strong> — corrigir dados incorretos</li>
        <li><strong class="text-foreground">Apagamento</strong> — solicitar a eliminação dos seus dados</li>
        <li><strong class="text-foreground">Portabilidade</strong> — receber os seus dados em formato legível por máquina</li>
        <li><strong class="text-foreground">Oposição</strong> — opor-se a determinados tratamentos, incluindo marketing direto</li>
      </ul>
      <p class="mt-3">Para exercer qualquer destes direitos, contacte-nos em <a href="mailto:privacidade@duckshop.com" class="text-primary hover:underline">privacidade@duckshop.com</a>.</p>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">5. Cookies</h2>
      <p>
        Utilizamos apenas cookies estritamente necessários para o funcionamento da loja (sessão, carrinho).
        Não utilizamos cookies de rastreamento de terceiros sem o seu consentimento.
      </p>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">6. Retenção de dados</h2>
      <p>
        Os dados de encomendas são conservados durante 5 anos por obrigações fiscais e legais.
        Os dados de marketing são eliminados assim que revogue o seu consentimento.
      </p>
    </section>

    <section>
      <h2 class="mb-3 text-xl font-bold text-foreground">7. Contacto</h2>
      <p>
        Para qualquer questão relacionada com privacidade, contacte-nos:<br />
        <a href="mailto:privacidade@duckshop.com" class="text-primary hover:underline">privacidade@duckshop.com</a><br />
        Duck Shop · Porto, Portugal
      </p>
    </section>
  </div>
</div>
