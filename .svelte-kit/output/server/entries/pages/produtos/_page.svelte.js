import { U as attributes, X as store_get, a0 as head, Z as attr, _ as ensure_array_like, V as attr_class, Y as unsubscribe_stores, W as stringify } from "../../../chunks/index2.js";
import { p as products } from "../../../chunks/products.js";
import "../../../chunks/cart.svelte.js";
import { g as getIconContext } from "../../../chunks/context2.js";
import { e as escape_html } from "../../../chunks/context.js";
import { M as MagnifyingGlass, X } from "../../../chunks/X.js";
import "../../../chunks/toast.js";
import { p as page } from "../../../chunks/stores.js";
import "clsx";
function Funnel($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M234.29,47.91A20,20,0,0,0,216,36H40A20,20,0,0,0,25.2,69.45l.12.14L92,140.75V216a20,20,0,0,0,31.1,16.64l32-21.33A20,20,0,0,0,164,194.66V140.75l66.67-71.16.12-.14A20,20,0,0,0,234.29,47.91Zm-91,79.89A12,12,0,0,0,140,136v56.52l-24,16V136a12,12,0,0,0-3.25-8.2L49.23,60H206.77Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M221.9,61.38,152,136v58.65a8,8,0,0,1-3.56,6.66l-32,21.33A8,8,0,0,1,104,216V136L34.1,61.38A8,8,0,0,1,40,48H216A8,8,0,0,1,221.9,61.38Z" opacity="0.2"></path><path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M227.81,66.76l-.08.09L160,139.17v55.49A16,16,0,0,1,152.87,208l-32,21.34A16,16,0,0,1,96,216V139.17L28.27,66.85l-.08-.09A16,16,0,0,1,40,40H216a16,16,0,0,1,11.84,26.76Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M228.77,50.34A13.8,13.8,0,0,0,216,42H40A14,14,0,0,0,29.67,65.42l.06.07L98,138.38V216a14,14,0,0,0,21.77,11.64l32-21.33A14,14,0,0,0,158,194.66V138.38l68.33-73A13.82,13.82,0,0,0,228.77,50.34Zm-11.26,6.94L147.62,131.9A6,6,0,0,0,146,136v58.66a2,2,0,0,1-.89,1.67l-32,21.33A2,2,0,0,1,110,216V136a6,6,0,0,0-1.62-4.1L38.53,57.32A2,2,0,0,1,40,54H216a1.9,1.9,0,0,1,1.83,1.19A1.86,1.86,0,0,1,217.51,57.28Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M230.6,49.53A15.81,15.81,0,0,0,216,40H40A16,16,0,0,0,28.19,66.76l.08.09L96,139.17V216a16,16,0,0,0,24.87,13.32l32-21.34A16,16,0,0,0,160,194.66V139.17l67.74-72.32.08-.09A15.8,15.8,0,0,0,230.6,49.53ZM40,56h0Zm106.18,74.58A8,8,0,0,0,144,136v58.66L112,216V136a8,8,0,0,0-2.16-5.47L40,56H216Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M227,51.15A11.85,11.85,0,0,0,216,44H40a12,12,0,0,0-8.88,20.07l.05.05L100,137.59V216a12,12,0,0,0,18.66,10l32-21.33a12,12,0,0,0,5.35-10V137.59l68.86-73.52A11.85,11.85,0,0,0,227,51.15Zm-8,7.5-69.9,74.62A4,4,0,0,0,148,136v58.65a4,4,0,0,1-1.78,3.33l-32,21.33A4,4,0,0,1,108,216V136a4,4,0,0,0-1.08-2.74L37.05,58.67A4,4,0,0,1,40,52H216a4,4,0,0,1,3,6.65Z"></path>`);
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
function SortAscending($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M128,128a12,12,0,0,1-12,12H48a12,12,0,0,1,0-24h68A12,12,0,0,1,128,128ZM48,76H180a12,12,0,0,0,0-24H48a12,12,0,0,0,0,24Zm52,104H48a12,12,0,0,0,0,24h52a12,12,0,0,0,0-24Zm132.49-20.49a12,12,0,0,0-17,0L196,179V112a12,12,0,0,0-24,0v67l-19.51-19.52a12,12,0,0,0-17,17l40,40a12,12,0,0,0,17,0l40-40A12,12,0,0,0,232.49,159.51Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M224,80v88l-24,24H48V64H208A16,16,0,0,1,224,80Z" opacity="0.2"></path><path d="M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,72h96a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm40,112H72a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm8-48H72a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Zm77.66,29.66-24,24a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L160,164.69V120a8,8,0,0,1,16,0v44.69l10.34-10.35a8,8,0,0,1,11.32,11.32Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M126,128a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12h72A6,6,0,0,1,126,128ZM48,70H184a6,6,0,0,0,0-12H48a6,6,0,0,0,0,12Zm56,116H48a6,6,0,0,0,0,12h56a6,6,0,0,0,0-12Zm124.24-22.24a6,6,0,0,0-8.48,0L190,193.51V112a6,6,0,0,0-12,0v81.51l-29.76-29.75a6,6,0,0,0-8.48,8.48l40,40a6,6,0,0,0,8.48,0l40-40A6,6,0,0,0,228.24,163.76Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M128,128a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16h72A8,8,0,0,1,128,128ZM48,72H184a8,8,0,0,0,0-16H48a8,8,0,0,0,0,16Zm56,112H48a8,8,0,0,0,0,16h56a8,8,0,0,0,0-16Zm125.66-21.66a8,8,0,0,0-11.32,0L192,188.69V112a8,8,0,0,0-16,0v76.69l-26.34-26.35a8,8,0,0,0-11.32,11.32l40,40a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,229.66,162.34Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M124,128a4,4,0,0,1-4,4H48a4,4,0,0,1,0-8h72A4,4,0,0,1,124,128ZM48,68H184a4,4,0,0,0,0-8H48a4,4,0,0,0,0,8Zm56,120H48a4,4,0,0,0,0,8h56a4,4,0,0,0,0-8Zm122.83-22.83a4,4,0,0,0-5.66,0L188,198.34V112a4,4,0,0,0-8,0v86.34l-33.17-33.17a4,4,0,0,0-5.66,5.66l40,40a4,4,0,0,0,5.66,0l40-40A4,4,0,0,0,226.83,165.17Z"></path>`);
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
function Product_card_skeleton($$renderer) {
  $$renderer.push(`<div class="relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm flex flex-col h-full svelte-8qznew"><div class="relative aspect-square bg-muted overflow-hidden svelte-8qznew"><div class="absolute inset-0 skeleton-shimmer svelte-8qznew"></div> <div class="absolute left-3 top-3 h-6 w-20 rounded-full bg-muted-foreground/10 skeleton-shimmer svelte-8qznew"></div></div> <div class="flex flex-col flex-1 p-5 gap-3 svelte-8qznew"><div class="h-5 w-3/4 rounded-lg bg-muted-foreground/10 skeleton-shimmer svelte-8qznew"></div> <div class="h-4 w-full rounded-lg bg-muted-foreground/8 skeleton-shimmer svelte-8qznew"></div> <div class="h-4 w-2/3 rounded-lg bg-muted-foreground/8 skeleton-shimmer svelte-8qznew"></div> <div class="flex-1 svelte-8qznew"></div> <div class="h-8 w-24 rounded-lg bg-muted-foreground/10 skeleton-shimmer svelte-8qznew"></div></div> <div class="border-t border-border/50 p-4 svelte-8qznew"><div class="h-11 w-full rounded-xl bg-muted-foreground/10 skeleton-shimmer svelte-8qznew"></div></div></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const allCategories = [...new Set(products.map((p) => p.category))];
    const maxPrice = Math.ceil(Math.max(...products.map((p) => p.price)));
    const initialCategory = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("categoria");
    let searchQuery = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("q") ?? "";
    let selectedCategories = initialCategory ? [initialCategory] : [];
    let maxPriceFilter = maxPrice;
    let onlyInStock = false;
    let onlyNew = store_get($$store_subs ??= {}, "$page", page).url.searchParams.get("novo") === "true";
    let sortBy = "relevance";
    const filteredProducts = products.filter((p) => {
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        if (!p.name.toLowerCase().includes(q) && !p.description.toLowerCase().includes(q)) return false;
      }
      if (selectedCategories.length > 0 && !selectedCategories.includes(p.category)) return false;
      if (p.price > maxPriceFilter) return false;
      if (onlyNew && !p.isNew) return false;
      return true;
    }).sort((a, b) => {
      return 0;
    });
    const hasActiveFilters = searchQuery !== "" || selectedCategories.length > 0 || maxPriceFilter < maxPrice || onlyInStock || onlyNew || sortBy !== "relevance";
    head("bhavc3", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Todos os Produtos | Duck Shop</title>`);
      });
      $$renderer3.push(`<meta name="description" content="Catálogo completo de patos de borracha temáticos. Tech, personagens, animais, Portugal e muito mais. Filtra, pesquisa e encontra o teu pato."/>`);
    });
    $$renderer2.push(`<div class="container mx-auto px-4 py-10"><div class="mb-8"><h1 class="mb-2 text-4xl font-bold tracking-tight md:text-5xl" style="font-family: 'Plus Jakarta Sans', sans-serif;">Catálogo</h1> <p class="text-muted-foreground">${escape_html(filteredProducts.length)} de ${escape_html(products.length)} patos encontrados</p></div> <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center"><div class="relative flex-1">`);
    MagnifyingGlass($$renderer2, {
      size: 16,
      weight: "regular",
      class: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
    });
    $$renderer2.push(`<!----> <input type="text" placeholder="Pesquisar patos..."${attr("value", searchQuery)} class="w-full rounded-xl border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20"/> `);
    if (searchQuery) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">`);
      X($$renderer2, { size: 14, weight: "regular" });
      $$renderer2.push(`<!----></button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-2">`);
    SortAscending($$renderer2, {
      size: 16,
      weight: "regular",
      class: "text-muted-foreground shrink-0"
    });
    $$renderer2.push(`<!----> `);
    $$renderer2.select(
      {
        value: sortBy,
        class: "rounded-xl border border-border bg-card px-3 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 cursor-pointer"
      },
      ($$renderer3) => {
        $$renderer3.option({ value: "relevance" }, ($$renderer4) => {
          $$renderer4.push(`Relevância`);
        });
        $$renderer3.option({ value: "price-asc" }, ($$renderer4) => {
          $$renderer4.push(`Menor preço`);
        });
        $$renderer3.option({ value: "price-desc" }, ($$renderer4) => {
          $$renderer4.push(`Maior preço`);
        });
        $$renderer3.option({ value: "newest" }, ($$renderer4) => {
          $$renderer4.push(`Novidades`);
        });
      }
    );
    $$renderer2.push(` <button class="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:border-primary hover:text-primary lg:hidden">`);
    Funnel($$renderer2, { size: 16, weight: "regular" });
    $$renderer2.push(`<!----> Filtros `);
    if (hasActiveFilters) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">${escape_html(selectedCategories.length + 0 + (onlyNew ? 1 : 0))}</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></button></div></div> <div class="flex gap-8"><aside class="hidden w-64 shrink-0 lg:block"><div class="sticky top-20 rounded-2xl border border-border bg-card p-6 shadow-sm"><div class="mb-6 flex items-center justify-between"><h2 class="font-bold">Filtros</h2> `);
    if (hasActiveFilters) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<button class="text-xs text-primary hover:underline">Limpar tudo</button>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="mb-6"><h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Categoria</h3> <div class="space-y-2"><!--[-->`);
    const each_array = ensure_array_like(allCategories);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let cat = each_array[$$index];
      $$renderer2.push(`<label class="flex cursor-pointer items-center gap-3 rounded-lg p-2 transition-colors hover:bg-muted"><input type="checkbox"${attr("checked", selectedCategories.includes(cat), true)} class="h-4 w-4 rounded border-border accent-primary"/> <span class="text-sm">${escape_html(cat)}</span> <span class="ml-auto text-xs text-muted-foreground">${escape_html(products.filter((p) => p.category === cat).length)}</span></label>`);
    }
    $$renderer2.push(`<!--]--></div></div> <div class="mb-6"><h3 class="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wide">Preço máximo</h3> <input type="range" min="0"${attr("max", maxPrice)} step="1"${attr("value", maxPriceFilter)} class="w-full accent-primary cursor-pointer"/> <div class="mt-2 flex justify-between text-sm text-muted-foreground"><span>€0</span> <span class="font-semibold text-foreground">até €${escape_html(maxPriceFilter.toFixed(0))}</span></div></div> <div class="space-y-3"><label class="flex cursor-pointer items-center justify-between gap-3"><span class="text-sm">Apenas disponíveis</span> <button role="switch"${attr("aria-checked", onlyInStock)} aria-label="Apenas disponíveis"${attr_class(`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${stringify("bg-muted-foreground/30")}`)}><span${attr_class(`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${stringify("translate-x-1")}`)}></span></button></label> <label class="flex cursor-pointer items-center justify-between gap-3"><span class="text-sm">Apenas novidades</span> <button role="switch"${attr("aria-checked", onlyNew)} aria-label="Apenas novidades"${attr_class(`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${stringify(onlyNew ? "bg-primary" : "bg-muted-foreground/30")}`)}><span${attr_class(`inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform ${stringify(onlyNew ? "translate-x-6" : "translate-x-1")}`)}></span></button></label></div></div></aside> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <div class="flex-1">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      const each_array_2 = ensure_array_like(Array(6));
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        each_array_2[$$index_2];
        Product_card_skeleton($$renderer2);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
