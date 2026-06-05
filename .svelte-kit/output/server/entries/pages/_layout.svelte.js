import "clsx";
import {
  U as attributes,
  V as attr_class,
  W as stringify,
  X as store_get,
  Y as unsubscribe_stores,
  Z as attr,
  _ as ensure_array_like,
} from "../../chunks/index2.js";
import { c as cart } from "../../chunks/cart.svelte.js";
import { g as getIconContext } from "../../chunks/context2.js";
import { e as escape_html } from "../../chunks/context.js";
import { M as MagnifyingGlass, X } from "../../chunks/X.js";
import { S as ShoppingCart } from "../../chunks/ShoppingCart.js";
import { p as page } from "../../chunks/stores.js";
import { M as MapPin } from "../../chunks/MapPin.js";
import { t as toasts } from "../../chunks/toast.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
function EnvelopeSimple($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let {
        weight: weight2,
        color: color2,
        size: size2,
        mirrored: mirrored2,
        ...attrs
      } = obj;
      return attrs;
    }
    $$renderer2.push(
      `<svg${attributes(
        {
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          width: size,
          height: size,
          fill: color,
          transform: mirrored ? "scale(-1, 1)" : void 0,
          viewBox: "0 0 256 256",
          ...svgAttr(ctx),
          ...svgAttr(props),
        },
        void 0,
        void 0,
        void 0,
        3,
      )}>`,
    );
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(
      `<!--]--><rect width="256" height="256" fill="none"></rect>`,
    );
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<path d="M224,44H32A12,12,0,0,0,20,56V192a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V56A12,12,0,0,0,224,44ZM193.15,68,128,127.72,62.85,68ZM44,188V83.28l75.89,69.57a12,12,0,0,0,16.22,0L212,83.28V188Z"></path>`,
      );
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(
          `<path d="M224,56l-96,88L32,56Z" opacity="0.2"></path><path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>`,
        );
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(
            `<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-8,144H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>`,
          );
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(
              `<path d="M224,50H32a6,6,0,0,0-6,6V192a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A6,6,0,0,0,224,50ZM208.58,62,128,135.86,47.42,62ZM216,194H40a2,2,0,0,1-2-2V69.64l86,78.78a6,6,0,0,0,8.1,0L218,69.64V192A2,2,0,0,1,216,194Z"></path>`,
            );
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(
                `<path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>`,
              );
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(
                  `<path d="M224,52H32a4,4,0,0,0-4,4V192a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A4,4,0,0,0,224,52Zm-10.28,8L128,138.57,42.28,60ZM216,196H40a4,4,0,0,1-4-4V65.09L125.3,147a4,4,0,0,0,5.4,0L220,65.09V192A4,4,0,0,1,216,196Z"></path>`,
                );
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(
                  `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`,
                );
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
function FacebookLogo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let {
        weight: weight2,
        color: color2,
        size: size2,
        mirrored: mirrored2,
        ...attrs
      } = obj;
      return attrs;
    }
    $$renderer2.push(
      `<svg${attributes(
        {
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          width: size,
          height: size,
          fill: color,
          transform: mirrored ? "scale(-1, 1)" : void 0,
          viewBox: "0 0 256 256",
          ...svgAttr(ctx),
          ...svgAttr(props),
        },
        void 0,
        void 0,
        void 0,
        3,
      )}>`,
    );
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(
      `<!--]--><rect width="256" height="256" fill="none"></rect>`,
    );
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<path d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"></path>`,
      );
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(
          `<path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>`,
        );
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(
            `<path d="M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"></path>`,
          );
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(
              `<path d="M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"></path>`,
            );
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(
                `<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>`,
              );
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(
                  `<path d="M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"></path>`,
                );
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(
                  `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`,
                );
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
function InstagramLogo($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let {
        weight: weight2,
        color: color2,
        size: size2,
        mirrored: mirrored2,
        ...attrs
      } = obj;
      return attrs;
    }
    $$renderer2.push(
      `<svg${attributes(
        {
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          width: size,
          height: size,
          fill: color,
          transform: mirrored ? "scale(-1, 1)" : void 0,
          viewBox: "0 0 256 256",
          ...svgAttr(ctx),
          ...svgAttr(props),
        },
        void 0,
        void 0,
        void 0,
        3,
      )}>`,
    );
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(
      `<!--]--><rect width="256" height="256" fill="none"></rect>`,
    );
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,152ZM176,20H80A60.07,60.07,0,0,0,20,80v96a60.07,60.07,0,0,0,60,60h96a60.07,60.07,0,0,0,60-60V80A60.07,60.07,0,0,0,176,20Zm36,156a36,36,0,0,1-36,36H80a36,36,0,0,1-36-36V80A36,36,0,0,1,80,44h96a36,36,0,0,1,36,36ZM196,76a16,16,0,1,1-16-16A16,16,0,0,1,196,76Z"></path>`,
      );
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(
          `<path d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z" opacity="0.2"></path><path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>`,
        );
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(
            `<path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24ZM128,176a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,176Zm60-96a12,12,0,1,1,12-12A12,12,0,0,1,188,80Zm-28,48a32,32,0,1,1-32-32A32,32,0,0,1,160,128Z"></path>`,
          );
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(
              `<path d="M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162ZM176,26H80A54.06,54.06,0,0,0,26,80v96a54.06,54.06,0,0,0,54,54h96a54.06,54.06,0,0,0,54-54V80A54.06,54.06,0,0,0,176,26Zm42,150a42,42,0,0,1-42,42H80a42,42,0,0,1-42-42V80A42,42,0,0,1,80,38h96a42,42,0,0,1,42,42ZM190,76a10,10,0,1,1-10-10A10,10,0,0,1,190,76Z"></path>`,
            );
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(
                `<path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>`,
              );
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(
                  `<path d="M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164ZM176,28H80A52.06,52.06,0,0,0,28,80v96a52.06,52.06,0,0,0,52,52h96a52.06,52.06,0,0,0,52-52V80A52.06,52.06,0,0,0,176,28Zm44,148a44.05,44.05,0,0,1-44,44H80a44.05,44.05,0,0,1-44-44V80A44.05,44.05,0,0,1,80,36h96a44.05,44.05,0,0,1,44,44ZM188,76a8,8,0,1,1-8-8A8,8,0,0,1,188,76Z"></path>`,
                );
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(
                  `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`,
                );
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
function List($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const ctx = getIconContext();
    let { children, $$slots, $$events, ...props } = $$props;
    let weight = props.weight ?? ctx.weight ?? "regular";
    let color = props.color ?? ctx.color ?? "currentColor";
    let size = props.size ?? ctx.size ?? "1em";
    let mirrored = props.mirrored ?? ctx.mirrored ?? false;
    function svgAttr(obj) {
      let {
        weight: weight2,
        color: color2,
        size: size2,
        mirrored: mirrored2,
        ...attrs
      } = obj;
      return attrs;
    }
    $$renderer2.push(
      `<svg${attributes(
        {
          xmlns: "http://www.w3.org/2000/svg",
          role: "img",
          width: size,
          height: size,
          fill: color,
          transform: mirrored ? "scale(-1, 1)" : void 0,
          viewBox: "0 0 256 256",
          ...svgAttr(ctx),
          ...svgAttr(props),
        },
        void 0,
        void 0,
        void 0,
        3,
      )}>`,
    );
    if (children) {
      $$renderer2.push("<!--[-->");
      children($$renderer2);
      $$renderer2.push(`<!---->`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(
      `<!--]--><rect width="256" height="256" fill="none"></rect>`,
    );
    if (weight === "bold") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<path d="M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"></path>`,
      );
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(
          `<path d="M216,64V192H40V64Z" opacity="0.2"></path><path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>`,
        );
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(
            `<path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"></path>`,
          );
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(
              `<path d="M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"></path>`,
            );
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(
                `<path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>`,
              );
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(
                  `<path d="M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"></path>`,
                );
              } else {
                $$renderer2.push("<!--[!-->");
                $$renderer2.push(
                  `${escape_html((console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'), ""))}`,
                );
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
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(
      `<header${attr_class(`sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl transition-all duration-300 ${stringify("")}`)}><div class="container mx-auto flex h-16 items-center justify-between px-4 md:px-6"><a href="/" class="flex items-center gap-2.5 group"><div class="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-primary to-accent shadow-lg shadow-primary/20 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary/30 group-hover:scale-105"><img src="/duck.svg" alt="Duck Shop logo" class="h-10 w-10"/></div> <span class="text-xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300" style="font-family: 'Plus Jakarta Sans', sans-serif;">Duck Shop</span></a> `,
    );
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<nav class="hidden items-center gap-8 md:flex"><a href="/"${attr_class(`relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/" ? "text-primary" : "text-foreground/70")}`)}>Início <span${attr_class(`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/" ? "w-full" : "w-0")}`)}></span></a> <a href="/produtos"${attr_class(`relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/produtos" ? "text-primary" : "text-foreground/70")}`)}>Catálogo <span${attr_class(`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/produtos" ? "w-full" : "w-0")}`)}></span></a> <a href="/sobre"${attr_class(`relative text-sm font-medium transition-all duration-200 hover:text-primary hover:scale-105 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/sobre" ? "text-primary" : "text-foreground/70")}`)}>Sobre <span${attr_class(`absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent transition-all duration-300 ${stringify(store_get(($$store_subs ??= {}), "$page", page).url.pathname === "/sobre" ? "w-full" : "w-0")}`)}></span></a> <button class="text-foreground/60 transition-colors hover:text-primary" aria-label="Pesquisar">`,
      );
      MagnifyingGlass($$renderer2, { size: 18, weight: "regular" });
      $$renderer2.push(
        `<!----></button> <a href="/carrinho" class="relative group"><div class="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/30 hover:scale-105">`,
      );
      ShoppingCart($$renderer2, {
        size: 16,
        weight: "duotone",
        class: "transition-transform duration-300 group-hover:rotate-12",
      });
      $$renderer2.push(`<!----></div> `);
      if (cart.totalItems > 0) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(
          `<span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white shadow-lg animate-bounce-in">${escape_html(cart.totalItems)}</span>`,
        );
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--></a></nav>`);
    }
    $$renderer2.push(
      `<!--]--> <div class="flex items-center gap-2 md:hidden"><a href="/carrinho" class="relative"><div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">`,
    );
    ShoppingCart($$renderer2, { size: 20, weight: "duotone" });
    $$renderer2.push(`<!----></div> `);
    if (cart.totalItems > 0) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(
        `<span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-white">${escape_html(cart.totalItems)}</span>`,
      );
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(
      `<!--]--></a> <button class="rounded-lg p-2 transition-colors hover:bg-muted" aria-label="Toggle menu">`,
    );
    {
      $$renderer2.push("<!--[!-->");
      List($$renderer2, { size: 22, weight: "regular" });
    }
    $$renderer2.push(`<!--]--></button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Footer($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let email = "";
    $$renderer2.push(
      `<footer class="relative border-t border-border/40 bg-gradient-to-br from-muted/40 to-background"><div class="container mx-auto px-4 py-16"><div class="grid gap-12 md:grid-cols-4"><div class="md:col-span-2"><div class="mb-4 flex items-center gap-2.5"><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg"><img src="/duck.svg" alt="Duck Shop" class="h-11 w-11"/></div> <span class="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent" style="font-family: 'Plus Jakarta Sans', sans-serif;">Duck Shop</span></div> <p class="mb-2 max-w-sm leading-relaxed text-muted-foreground">Patos de borracha temáticos com personalidade. Para developers, coleccionadores e quem quer uma lembrança de Portugal diferente.</p> <div class="mb-6 flex items-center gap-1.5 text-xs text-muted-foreground">`,
    );
    MapPin($$renderer2, {
      size: 12,
      weight: "duotone",
      class: "text-primary shrink-0",
    });
    $$renderer2.push(
      `<!----> <span>Porto, Portugal</span></div> <div class="flex gap-3"><a href="https://www.facebook.com/duckshop" aria-label="Facebook" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">`,
    );
    FacebookLogo($$renderer2, { size: 20, weight: "fill" });
    $$renderer2.push(
      `<!----></a> <a href="https://www.instagram.com/duckshop" aria-label="Instagram" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">`,
    );
    InstagramLogo($$renderer2, { size: 20, weight: "fill" });
    $$renderer2.push(
      `<!----></a> <a href="mailto:contato@duckshop.com" aria-label="Email" class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:scale-110">`,
    );
    EnvelopeSimple($$renderer2, { size: 20, weight: "regular" });
    $$renderer2.push(
      `<!----></a></div></div> <div><h3 class="mb-5 font-bold">Links Rápidos</h3> <ul class="space-y-3 text-sm"><li><a href="/" class="text-muted-foreground transition-colors hover:text-primary">Início</a></li> <li><a href="/produtos" class="text-muted-foreground transition-colors hover:text-primary">Catálogo</a></li> <li><a href="/sobre" class="text-muted-foreground transition-colors hover:text-primary">Sobre Nós</a></li> <li><a href="/carrinho" class="text-muted-foreground transition-colors hover:text-primary">Carrinho</a></li> <li><a href="/privacidade" class="text-muted-foreground transition-colors hover:text-primary">Privacidade</a></li></ul></div> <div><h3 class="mb-2 font-bold">Newsletter</h3> <p class="mb-4 text-sm text-muted-foreground">Receber novidades de quack em quack 🦆</p> `,
    );
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(
        `<form class="space-y-2"><input type="email" placeholder="teu@email.com"${attr("value", email)} required class="w-full rounded-xl border border-border bg-card px-4 py-2.5 text-sm outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20 placeholder:text-muted-foreground"/> <button type="submit" class="w-full rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 active:scale-95">Subscrever</button></form>`,
      );
    }
    $$renderer2.push(
      `<!--]--></div></div> <div class="mt-12 border-t border-border/40 pt-8 flex flex-col items-center justify-between gap-3 sm:flex-row text-sm text-muted-foreground"><p>© ${escape_html(/* @__PURE__ */ new Date().getFullYear())} Duck Shop · Todos os direitos reservados.</p> <p>Desenvolvido por <a href="https://void-studio-vs.vercel.app/" class="text-accent hover:underline ml-1">Void Studio</a></p></div></div></footer>`,
    );
  });
}
function Toast($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(
      `<div class="fixed bottom-6 right-6 z-[100] flex flex-col gap-2 pointer-events-none svelte-vg4gef" aria-live="polite"><!--[-->`,
    );
    const each_array = ensure_array_like(
      store_get(($$store_subs ??= {}), "$toasts", toasts),
    );
    for (
      let $$index = 0, $$length = each_array.length;
      $$index < $$length;
      $$index++
    ) {
      let toast = each_array[$$index];
      $$renderer2.push(
        `<div class="pointer-events-auto flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-2xl shadow-black/10 min-w-[220px] max-w-[320px] svelte-vg4gef"><div class="absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary to-accent"></div> <span class="text-xl shrink-0 ml-1">${escape_html(toast.emoji)}</span> <p class="flex-1 text-sm font-medium text-foreground leading-snug">${escape_html(toast.message)}</p> <button class="shrink-0 rounded-md p-0.5 text-muted-foreground transition-colors hover:text-foreground" aria-label="Fechar">`,
      );
      X($$renderer2, { size: 14, weight: "regular" });
      $$renderer2.push(`<!----></button></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<div class="flex min-h-screen flex-col">`);
    Header($$renderer2);
    $$renderer2.push(`<!----> <main class="flex-1"><!---->`);
    {
      $$renderer2.push(`<div>`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!----></main> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----></div> `);
    Toast($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export { _layout as default };
