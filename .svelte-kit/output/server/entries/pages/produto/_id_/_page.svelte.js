import { U as attributes, X as store_get, a0 as head, Z as attr, $ as attr_style, W as stringify, V as attr_class, _ as ensure_array_like, Y as unsubscribe_stores } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { p as products } from "../../../../chunks/products.js";
import { c as cart } from "../../../../chunks/cart.svelte.js";
import { A as ArrowLeft } from "../../../../chunks/ArrowLeft.js";
import { g as getIconContext } from "../../../../chunks/context2.js";
import { e as escape_html } from "../../../../chunks/context.js";
import { H as Heart } from "../../../../chunks/Heart.js";
import { M as MapPin } from "../../../../chunks/MapPin.js";
import { S as ShoppingCart } from "../../../../chunks/ShoppingCart.js";
import { S as Star } from "../../../../chunks/Star.js";
import "../../../../chunks/toast.js";
function Check($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let { weight: weight2, color: color2, size: size2, mirrored: mirrored2, ...attrs } = obj;
      return attrs;
    }
    $$renderer2.push(`<svg${attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        width: size,
        height: size,
        fill: color,
        transform: mirrored ? "scale(-1, 1)" : void 0,
        viewBox: "0 0 256 256",
        ...svgAttr(ctx),
        ...svgAttr(props)
      },
      void 0,
      void 0,
      void 0,
      3
    )}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--><rect width="256" height="256" fill="none"></rect>`);
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z" opacity="0.2"></path><path d="M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"></path>`);
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(`${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></svg>`);
  });
}
function ShareNetwork($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let { weight: weight2, color: color2, size: size2, mirrored: mirrored2, ...attrs } = obj;
      return attrs;
    }
    $$renderer2.push(`<svg${attributes(
      {
        xmlns: "http://www.w3.org/2000/svg",
        role: "img",
        width: size,
        height: size,
        fill: color,
        transform: mirrored ? "scale(-1, 1)" : void 0,
        viewBox: "0 0 256 256",
        ...svgAttr(ctx),
        ...svgAttr(props)
      },
      void 0,
      void 0,
      void 0,
      3
    )}>`);
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--><rect width="256" height="256" fill="none"></rect>`);
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<path d="M176,156a43.78,43.78,0,0,0-29.09,11L106.1,140.8a44.07,44.07,0,0,0,0-25.6L146.91,89a43.83,43.83,0,1,0-13-20.17L93.09,95a44,44,0,1,0,0,65.94L133.9,187.2A44,44,0,1,0,176,156Zm0-120a20,20,0,1,1-20,20A20,20,0,0,1,176,36ZM64,148a20,20,0,1,1,20-20A20,20,0,0,1,64,148Zm112,72a20,20,0,1,1,20-20A20,20,0,0,1,176,220Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M208,200a32,32,0,1,1-32-32A32,32,0,0,1,208,200ZM176,88a32,32,0,1,0-32-32A32,32,0,0,0,176,88Z" opacity="0.2"></path><path d="M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M212,200a36,36,0,1,1-69.85-12.25l-53-34.05a36,36,0,1,1,0-51.4l53-34a36.09,36.09,0,1,1,8.67,13.45l-53,34.05a36,36,0,0,1,0,24.5l53,34.05A36,36,0,0,1,212,200Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M176,162a37.91,37.91,0,0,0-28.3,12.67L98.8,143.24a37.89,37.89,0,0,0,0-30.48l48.9-31.43a38,38,0,1,0-6.5-10.09L92.3,102.67a38,38,0,1,0,0,50.66l48.9,31.43A38,38,0,1,0,176,162Zm0-132a26,26,0,1,1-26,26A26,26,0,0,1,176,30ZM64,154a26,26,0,1,1,26-26A26,26,0,0,1,64,154Zm112,72a26,26,0,1,1,26-26A26,26,0,0,1,176,226Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M176,160a39.89,39.89,0,0,0-28.62,12.09l-46.1-29.63a39.8,39.8,0,0,0,0-28.92l46.1-29.63a40,40,0,1,0-8.66-13.45l-46.1,29.63a40,40,0,1,0,0,55.82l46.1,29.63A40,40,0,1,0,176,160Zm0-128a24,24,0,1,1-24,24A24,24,0,0,1,176,32ZM64,152a24,24,0,1,1,24-24A24,24,0,0,1,64,152Zm112,72a24,24,0,1,1,24-24A24,24,0,0,1,176,224Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M176,164a36,36,0,0,0-27.92,13.3L96.25,144a35.92,35.92,0,0,0,0-32L148.08,78.7A35.93,35.93,0,1,0,143.75,72L91.92,105.3a36,36,0,1,0,0,45.4L143.75,184A36,36,0,1,0,176,164Zm0-136a28,28,0,1,1-28,28A28,28,0,0,1,176,28ZM64,156a28,28,0,1,1,28-28A28,28,0,0,1,64,156Zm112,72a28,28,0,1,1,28-28A28,28,0,0,1,176,228Z"></path>`);
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(`${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`);
              }
              $$renderer2.push(`<!--]-->`);
            }
            $$renderer2.push(`<!--]-->`);
          }
          $$renderer2.push(`<!--]-->`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></svg>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const productId = parseInt(store_get($$store_subs ??= {}, "$page", page).params.id);
    const product = products.find((p) => p.id === productId);
    let activeTab = "descricao";
    const related = product ? products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4) : [];
    const mockReviews = [
      {
        name: "Ana M.",
        rating: 5,
        text: "Adorei! O pato chegou embalado lindamente e é ainda mais fofo ao vivo. Recomendo muito!",
        date: "Jan 2025"
      },
      {
        name: "Filipe R.",
        rating: 5,
        text: "Comprei o Debug Duck para o meu colega dev. A reação foi épica. Já encomendei um para mim.",
        date: "Fev 2025"
      },
      {
        name: "Sara C.",
        rating: 4,
        text: "Produto de qualidade, entrega rápida. O único senão é que queria mais opções de Portugal.",
        date: "Mar 2025"
      },
      {
        name: "João P.",
        rating: 5,
        text: "Serviço impecável. O packaging tinha uma mensagem surpresa que fez o meu dia. Voltarei a comprar!",
        date: "Mar 2025"
      }
    ];
    const avgRating = (mockReviews.reduce((s, r) => s + r.rating, 0) / mockReviews.length).toFixed(1);
    const formatPrice = (price) => price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
    const categoryColors = {
      "Tech & Geek": "bg-blue-100 text-blue-700",
      "Personagens": "bg-violet-100 text-violet-700",
      "Animais": "bg-emerald-100 text-emerald-700",
      "Festividades": "bg-orange-100 text-orange-700",
      "Portugal": "bg-red-100 text-red-700"
    };
    const badgeClass = product ? categoryColors[product.category] ?? "bg-slate-100 text-slate-700" : "";
    head("gghlry", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>${escape_html(product ? `${product.name} | Duck Shop` : "Produto | Duck Shop")}</title>`);
      });
      $$renderer3.push(`<meta name="description"${attr("content", product ? `${product.description} Compra na Duck Shop — patos de borracha temáticos do Porto, Portugal.` : "Duck Shop — patos de borracha temáticos.")}/>`);
    });
    if (product) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="container mx-auto px-4 py-8 md:py-12"><a href="/produtos" class="group mb-8 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 hover:bg-muted">`);
      ArrowLeft($$renderer2, {
        size: 16,
        weight: "regular",
        class: "transition-transform duration-300 group-hover:-translate-x-1"
      });
      $$renderer2.push(`<!----> Voltar ao catálogo</a> <div class="grid gap-12 lg:grid-cols-2 mb-16"><div class="group relative overflow-hidden rounded-3xl border border-border bg-muted/30 shadow-2xl aspect-square">`);
      if (product.image && product.image !== "/duck.svg") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<img${attr("src", product.image)}${attr("alt", product.name)} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.__e=event"/>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (product.emoji) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="flex h-full w-full items-center justify-center"${attr_style(`background-color: ${stringify(product.placeholderBg ?? "#6c63ff")}18;`)}><span class="text-[10rem] select-none">${escape_html(product.emoji)}</span></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<img src="/duck.svg"${attr("alt", product.name)} class="h-full w-full object-contain p-16 opacity-20"/>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--> <div class="absolute right-4 top-4 flex flex-col gap-2"><button class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Favoritar">`);
      Heart($$renderer2, {
        size: 20,
        weight: "regular",
        class: `transition-all ${stringify("text-gray-600")}`
      });
      $$renderer2.push(`<!----></button> <button class="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Partilhar">`);
      {
        $$renderer2.push("<!--[!-->");
        ShareNetwork($$renderer2, { size: 20, weight: "regular", class: "text-gray-600" });
      }
      $$renderer2.push(`<!--]--></button></div> `);
      if (product.isNew) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="absolute left-4 top-4"><span class="rounded-full bg-accent px-3 py-1 text-xs font-bold text-white shadow">Novo</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div> <div class="flex flex-col"><div class="mb-4 flex items-center justify-between flex-wrap gap-2"><span${attr_class(`rounded-full px-4 py-1.5 text-sm font-semibold ${stringify(badgeClass)}`)}>${escape_html(product.category)}</span> <div class="flex items-center gap-1.5"><!--[-->`);
      const each_array = ensure_array_like(Array(5));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        each_array[i];
        Star($$renderer2, {
          size: 16,
          weight: i < Math.round(Number(avgRating)) ? "fill" : "regular",
          class: i < Math.round(Number(avgRating)) ? "text-yellow-400" : "text-gray-300"
        });
      }
      $$renderer2.push(`<!--]--> <span class="ml-1 text-sm text-muted-foreground">(${escape_html(avgRating)} · ${escape_html(mockReviews.length)} avaliações)</span></div></div> <h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">${escape_html(product.name)}</h1> <div class="mb-6 flex items-baseline gap-3"><span class="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">${escape_html(formatPrice(product.price))}</span> <span class="text-lg text-muted-foreground line-through">${escape_html(formatPrice(product.price * 1.3))}</span> <span class="rounded-full bg-accent/10 px-3 py-1 text-sm font-semibold text-accent">-23%</span></div> <div class="mb-8 flex flex-wrap items-center gap-2">`);
      if (product.inStock) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 w-fit border border-emerald-200">`);
        Check($$renderer2, { size: 16, weight: "bold" });
        $$renderer2.push(`<!----> Em stock · Pronta entrega</div> `);
        if (product.id % 3 === 0) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<span class="rounded-xl px-3 py-2 text-xs font-semibold animate-pulse" style="background: hsl(38 92% 50% / 0.12); color: hsl(38 92% 40%); border: 1px solid hsl(38 92% 50% / 0.3)">⚠️ Apenas 3 restantes!</span>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]-->`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<span class="rounded-xl px-4 py-3 text-sm font-medium w-fit block" style="background: hsl(0 100% 71% / 0.1); color: hsl(0 100% 71%); border: 1px solid hsl(0 100% 71% / 0.3)">Produto esgotado</span>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="mb-6 border-b border-border"><div class="flex gap-0"><!--[-->`);
      const each_array_1 = ensure_array_like([
        ["descricao", "Descrição"],
        ["detalhes", "Detalhes"],
        ["avaliacoes", "Avaliações"]
      ]);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let [tab, label] = each_array_1[$$index_1];
        $$renderer2.push(`<button${attr_class(`px-5 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${stringify(activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground")}`)}>${escape_html(label)}</button>`);
      }
      $$renderer2.push(`<!--]--></div></div> <div class="mb-8 min-h-[6rem]">`);
      {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<p class="leading-relaxed text-muted-foreground">${escape_html(product.description)}</p>`);
      }
      $$renderer2.push(`<!--]--></div> <div class="mt-auto space-y-3"><button${attr("disabled", !product.inStock, true)}${attr_class(`group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl px-8 py-5 text-lg font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] ${stringify("bg-gradient-to-r from-primary to-accent shadow-primary/30")}`)}><div class="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div> `);
      {
        $$renderer2.push("<!--[!-->");
        ShoppingCart($$renderer2, { size: 24, weight: "duotone", class: "relative z-10" });
        $$renderer2.push(`<!----> <span class="relative z-10">${escape_html(product.inStock ? "Adicionar ao Carrinho" : "Produto Indisponível")}</span>`);
      }
      $$renderer2.push(`<!--]--></button> `);
      if (cart.totalItems > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<a href="/carrinho" class="block rounded-xl border-2 border-border bg-background px-6 py-4 text-center font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/5">Ver carrinho (${escape_html(cart.totalItems)} ${escape_html(cart.totalItems === 1 ? "item" : "itens")})</a>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> <div class="flex items-center gap-2 text-xs text-muted-foreground pt-1">`);
      MapPin($$renderer2, { size: 12, weight: "duotone", class: "text-primary shrink-0" });
      $$renderer2.push(`<!----> <span>Enviado de Porto, Portugal · Entrega em 3–5 dias úteis</span></div></div></div></div> `);
      if (related.length > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="border-t border-border/40 pt-16"><h2 class="mb-10 text-center text-3xl font-bold md:text-4xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">Também podes gostar</h2> <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
        const each_array_4 = ensure_array_like(related);
        for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
          let rel = each_array_4[$$index_4];
          $$renderer2.push(`<a${attr("href", `/produto/${rel.id}`)} class="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"><div class="aspect-square overflow-hidden bg-muted/30 flex items-center justify-center">`);
          if (rel.emoji) {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<span class="text-7xl select-none transition-transform duration-500 group-hover:scale-110">${escape_html(rel.emoji)}</span>`);
          } else {
            $$renderer2.push("<!--[!-->");
            $$renderer2.push(`<img${attr("src", rel.image)}${attr("alt", rel.name)} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"/>`);
          }
          $$renderer2.push(`<!--]--></div> <div class="p-4"><h3 class="mb-1 font-semibold transition-colors group-hover:text-primary line-clamp-1">${escape_html(rel.name)}</h3> <p class="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">${escape_html(formatPrice(rel.price))}</p></div></a>`);
        }
        $$renderer2.push(`<!--]--></div></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></div>`);
    } else {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<div class="container mx-auto px-4 py-24 text-center"><span class="mb-6 block text-7xl">🦆</span> <h1 class="mb-4 text-3xl font-bold">Pato não encontrado</h1> <p class="mb-8 text-muted-foreground">Este pato voou para outros ares. Experimenta o nosso catálogo.</p> <a href="/produtos" class="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-semibold text-white hover:bg-primary/90 transition-colors">Ver catálogo</a></div>`);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
