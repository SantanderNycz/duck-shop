import { U as attributes, Z as attr, $ as attr_style, W as stringify, V as attr_class, a0 as head, _ as ensure_array_like } from "../../chunks/index2.js";
import { p as products } from "../../chunks/products.js";
import "../../chunks/cart.svelte.js";
import { H as Heart } from "../../chunks/Heart.js";
import { S as ShoppingCart } from "../../chunks/ShoppingCart.js";
import "../../chunks/toast.js";
import { e as escape_html } from "../../chunks/context.js";
import { A as ArrowRight } from "../../chunks/ArrowRight.js";
import { g as getIconContext } from "../../chunks/context2.js";
import { S as Smiley } from "../../chunks/Smiley.js";
import { T as Tag } from "../../chunks/Tag.js";
function Code($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M240,128l-48,40H64L16,128,64,88H192Z" opacity="0.2"></path><path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"></path>`);
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
function Package($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M225.6,62.64l-88-48.17a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.17A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.64ZM128,36.57,200,76,178.57,87.73l-72-39.42Zm0,78.83L56,76,81.56,62l72,39.41ZM44,96.79l72,39.4v76.67L44,173.44Zm96,116.07V136.19l24-13.13V152a12,12,0,0,0,24,0V109.92l24-13.13v76.65Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M128,129.09V232a8,8,0,0,1-3.84-1l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,.7-3.25Z" opacity="0.2"></path><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.35,44L178.57,92.29l-80.35-44Zm0,88L47.65,76,81.56,57.43l80.35,44Zm88,55.85h0l-80,43.79V133.83l32-17.51V152a8,8,0,0,0,16,0V107.56l32-17.51v85.76Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.18A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.27l88,48.18a13.92,13.92,0,0,0,13.44,0l88-48.18A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM127,30.25a2,2,0,0,1,1.92,0L212.51,76,178.57,94.57,94.05,48.31ZM122,223,39,177.57a2,2,0,0,1-1-1.75V86.66l84,46ZM43.49,76,81.56,55.15l84.51,46.26L128,122.24ZM218,175.82a2,2,0,0,1-1,1.75h0L134,223V132.64l36-19.71V152a6,6,0,0,0,12,0V106.37l36-19.71Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0L216.67,76,178.5,96.89a4,4,0,0,0-.58-.4l-88-48.18Zm1.92,96L39.33,76,81.56,52.87l88.67,48.54Zm-89.92,54.8a4,4,0,0,1-2.08-3.5V83.29l88,48.16v94.91Zm179.84,0h0l-85.92,47V131.45l40-21.89V152a4,4,0,0,0,8,0V105.18l40-21.89v92.53A4,4,0,0,1,217.92,179.32Z"></path>`);
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
function Recycle($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M100,208a12,12,0,0,1-12,12H40a28,28,0,0,1-24.23-42l29.45-50.88-4.76,1.27a12,12,0,1,1-6.2-23.18l32.77-8.77a12,12,0,0,1,14.69,8.48l8.79,32.77a12,12,0,1,1-23.17,6.22L66.08,139l-29.5,51A4,4,0,0,0,40,196H88A12,12,0,0,1,100,208ZM128,36a3.87,3.87,0,0,1,3.46,2l29.45,50.87-4.75-1.27A12,12,0,1,0,150,110.78l32.77,8.79a12,12,0,0,0,14.69-8.48L206.2,78.3A12,12,0,1,0,183,72.08l-1.31,4.86L152.23,26a28,28,0,0,0-48.46,0L80.61,66a12,12,0,1,0,20.77,12l23.16-40A3.87,3.87,0,0,1,128,36ZM240.19,178l-23.14-40a12,12,0,1,0-20.77,12l23.14,40a4,4,0,0,1-3.46,6H157l3.51-3.51a12,12,0,1,0-17-17l-24,24a12,12,0,0,0,0,17l24,24a12,12,0,1,0,17-17L157,220h59a28,28,0,0,0,24.23-42Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M216,208H40a16,16,0,0,1-13.84-24l88-152a16,16,0,0,1,27.7,0l88,152A16,16,0,0,1,216,208Z" opacity="0.2"></path><path d="M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l34.29-59.25L39.47,124.5A8,8,0,1,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77A8,8,0,0,1,81,148.5a8.37,8.37,0,0,1-2.08.27,8,8,0,0,1-7.72-5.93l-3.8-14.15L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208Zm140.73-28-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H147.31l10.34-10.34a8,8,0,0,0-11.31-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.31-11.32L147.31,216H216a24,24,0,0,0,20.77-36ZM128,32a7.85,7.85,0,0,1,6.92,4l34.29,59.25-14.08-3.78A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,1,0-15.45-4.14l-3.8,14.17L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l28-48.3-13.82-8A8,8,0,0,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77a8,8,0,0,1-11.73,9l-13.88-8L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208ZM128,32a7.85,7.85,0,0,1,6.92,4l28,48.3-13.82,8A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,0,0-11.72-9l-13.89,8L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32ZM236.73,180l-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H160V184a8,8,0,0,0-13.66-5.66l-24,24a8,8,0,0,0,0,11.32l24,24A8,8,0,0,0,160,232V216h56a24,24,0,0,0,20.77-36Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M94,208a6,6,0,0,1-6,6H40a22,22,0,0,1-19-33l36.71-63.44-18.76,5a6,6,0,0,1-3.1-11.6l32.77-8.77A6,6,0,0,1,76,106.45l8.8,32.76a6,6,0,0,1-4.24,7.35,6.09,6.09,0,0,1-1.56.21,6,6,0,0,1-5.79-4.45l-5-18.8L31.38,187A10,10,0,0,0,40,202H88A6,6,0,0,1,94,208Zm141-27-23.14-40a6,6,0,0,0-10.38,6l23.14,40A10,10,0,0,1,216,202H142.48l13.76-13.76a6,6,0,0,0-8.48-8.48l-24,24a6,6,0,0,0,0,8.48l24,24a6,6,0,0,0,8.48-8.48L142.48,214H216a22,22,0,0,0,19-33ZM136.65,35l36.72,63.44-18.76-5A6,6,0,0,0,151.5,105l32.78,8.79a6,6,0,0,0,7.34-4.25l8.79-32.78a6,6,0,1,0-11.58-3.11l-5.05,18.82L147,29A22,22,0,0,0,109,29L85.8,69a6,6,0,0,0,10.39,6l23.16-40a10,10,0,0,1,17.3,0Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M96,208a8,8,0,0,1-8,8H40a24,24,0,0,1-20.77-36l34.29-59.25L39.47,124.5A8,8,0,1,1,35.33,109l32.77-8.77a8,8,0,0,1,9.8,5.66l8.79,32.77A8,8,0,0,1,81,148.5a8.37,8.37,0,0,1-2.08.27,8,8,0,0,1-7.72-5.93l-3.8-14.15L33.11,188A8,8,0,0,0,40,200H88A8,8,0,0,1,96,208Zm140.73-28-23.14-40a8,8,0,0,0-13.84,8l23.14,40A8,8,0,0,1,216,200H147.31l10.34-10.34a8,8,0,0,0-11.31-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.31-11.32L147.31,216H216a24,24,0,0,0,20.77-36ZM128,32a7.85,7.85,0,0,1,6.92,4l34.29,59.25-14.08-3.78A8,8,0,0,0,151,106.92l32.78,8.79a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,7.72-5.93l8.79-32.79a8,8,0,1,0-15.45-4.14l-3.8,14.17L148.77,28a24,24,0,0,0-41.54,0L84.07,68a8,8,0,0,0,13.85,8l23.16-40A7.85,7.85,0,0,1,128,32Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M92,208a4,4,0,0,1-4,4H40a20,20,0,0,1-17.31-30l39.14-67.62-23.43,6.27a4,4,0,1,1-2.07-7.72l32.77-8.77A4,4,0,0,1,74,107l8.79,32.77a4,4,0,0,1-2.82,4.9,3.77,3.77,0,0,1-1,.14,4,4,0,0,1-3.86-3l-6.3-23.47L29.65,186A12,12,0,0,0,40,204H88A4,4,0,0,1,92,208Zm141.28-26-23.14-40a4,4,0,0,0-6.93,4l23.14,40A12,12,0,0,1,216,204H137.66l17.17-17.17a4,4,0,0,0-5.66-5.66l-24,24a4,4,0,0,0,0,5.66l24,24a4,4,0,0,0,5.66-5.66L137.66,212H216a20,20,0,0,0,17.31-30ZM138.38,34l39.14,67.62-23.43-6.28a4,4,0,0,0-2.07,7.73l32.78,8.78a3.65,3.65,0,0,0,1,.14,4,4,0,0,0,3.86-3l8.79-32.79a4,4,0,1,0-7.72-2.07l-6.3,23.47L145.31,30a20,20,0,0,0-34.62,0L87.53,70a4,4,0,0,0,6.93,4l23.15-40a12,12,0,0,1,20.77,0Z"></path>`);
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
function ShieldCheck($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" opacity="0.2"></path><path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-41.17-10.83a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z"></path>`);
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
function UsersThree($$renderer, $$props) {
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
      $$renderer2.push(`<path d="M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z"></path>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (weight === "duotone") {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<path d="M168,144a40,40,0,1,1-40-40A40,40,0,0,1,168,144ZM64,56A32,32,0,1,0,96,88,32,32,0,0,0,64,56Zm128,0a32,32,0,1,0,32,32A32,32,0,0,0,192,56Z" opacity="0.2"></path><path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1,0-16,24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.85,8,57,57,0,0,0-98.15,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (weight === "fill") {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<path d="M64.12,147.8a4,4,0,0,1-4,4.2H16a8,8,0,0,1-7.8-6.17,8.35,8.35,0,0,1,1.62-6.93A67.79,67.79,0,0,1,37,117.51a40,40,0,1,1,66.46-35.8,3.94,3.94,0,0,1-2.27,4.18A64.08,64.08,0,0,0,64,144C64,145.28,64,146.54,64.12,147.8Zm182-8.91A67.76,67.76,0,0,0,219,117.51a40,40,0,1,0-66.46-35.8,3.94,3.94,0,0,0,2.27,4.18A64.08,64.08,0,0,1,192,144c0,1.28,0,2.54-.12,3.8a4,4,0,0,0,4,4.2H240a8,8,0,0,0,7.8-6.17A8.33,8.33,0,0,0,246.17,138.89Zm-89,43.18a48,48,0,1,0-58.37,0A72.13,72.13,0,0,0,65.07,212,8,8,0,0,0,72,224H184a8,8,0,0,0,6.93-12A72.15,72.15,0,0,0,157.19,182.07Z"></path>`);
        } else {
          $$renderer2.push("<!--[!-->");
          if (weight === "light") {
            $$renderer2.push("<!--[-->");
            $$renderer2.push(`<path d="M243.6,148.8a6,6,0,0,1-8.4-1.2A53.58,53.58,0,0,0,192,126a6,6,0,0,1,0-12,26,26,0,1,0-25.18-32.5,6,6,0,0,1-11.62-3,38,38,0,1,1,59.91,39.63A65.69,65.69,0,0,1,244.8,140.4,6,6,0,0,1,243.6,148.8ZM189.19,213a6,6,0,0,1-2.19,8.2,5.9,5.9,0,0,1-3,.81,6,6,0,0,1-5.2-3,59,59,0,0,0-101.62,0,6,6,0,1,1-10.38-6A70.1,70.1,0,0,1,103,182.55a46,46,0,1,1,50.1,0A70.1,70.1,0,0,1,189.19,213ZM128,178a34,34,0,1,0-34-34A34,34,0,0,0,128,178ZM70,120a6,6,0,0,0-6-6A26,26,0,1,1,89.18,81.49a6,6,0,1,0,11.62-3,38,38,0,1,0-59.91,39.63A65.69,65.69,0,0,0,11.2,140.4a6,6,0,1,0,9.6,7.2A53.58,53.58,0,0,1,64,126,6,6,0,0,0,70,120Z"></path>`);
          } else {
            $$renderer2.push("<!--[!-->");
            if (weight === "regular") {
              $$renderer2.push("<!--[-->");
              $$renderer2.push(`<path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z"></path>`);
            } else {
              $$renderer2.push("<!--[!-->");
              if (weight === "thin") {
                $$renderer2.push("<!--[-->");
                $$renderer2.push(`<path d="M237,147.44a4,4,0,0,1-5.48-1.4c-8.33-14-20.93-22-34.56-22a4,4,0,0,1-1.2-.2,36.76,36.76,0,0,1-3.8.2,4,4,0,0,1,0-8,28,28,0,1,0-27.12-35,4,4,0,0,1-7.75-2,36,36,0,1,1,54,39.48c10.81,3.85,20.51,12,27.31,23.48A4,4,0,0,1,237,147.44ZM187.46,214a4,4,0,0,1-1.46,5.46,3.93,3.93,0,0,1-2,.54,4,4,0,0,1-3.46-2,61,61,0,0,0-105.08,0,4,4,0,0,1-6.92-4,68.35,68.35,0,0,1,39.19-31,44,44,0,1,1,40.54,0A68.35,68.35,0,0,1,187.46,214ZM128,180a36,36,0,1,0-36-36A36,36,0,0,0,128,180ZM64,116A28,28,0,1,1,91.12,81a4,4,0,0,0,7.75-2A36,36,0,1,0,45.3,118.75,63.55,63.55,0,0,0,12.8,141.6a4,4,0,0,0,6.4,4.8A55.55,55.55,0,0,1,64,124a4,4,0,0,0,0-8Z"></path>`);
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
function Product_card($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { product } = $$props;
    const formatPrice = (price) => price.toLocaleString("pt-PT", { style: "currency", currency: "EUR" });
    const categoryStyles = {
      "Tech & Geek": "bg-blue-100 text-blue-700",
      "Personagens": "bg-violet-100 text-violet-700",
      "Animais": "bg-emerald-100 text-emerald-700",
      "Festividades": "bg-orange-100 text-orange-700",
      "Portugal": "bg-red-100 text-red-700"
    };
    const badgeClass = categoryStyles[product.category] ?? "bg-slate-100 text-slate-700";
    $$renderer2.push(`<div class="group relative overflow-hidden rounded-2xl border border-border/50 bg-card shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30 hover:-translate-y-1 flex flex-col h-full"><a${attr("href", `/produto/${product.id}`)} class="flex flex-col flex-1"><div class="relative aspect-square overflow-hidden bg-linear-to-br from-muted to-muted/50">`);
    if (product.image && product.image !== "/duck.svg") {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<img${attr("src", product.image)}${attr("alt", product.name)} class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"${attr_style(`object-position: ${product.imagePosition || "center"};`)} onerror="this.__e=event"/>`);
    } else {
      $$renderer2.push("<!--[!-->");
      if (product.emoji) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<div class="flex h-full w-full items-center justify-center transition-transform duration-700 group-hover:scale-110"${attr_style(`background-color: ${stringify(product.placeholderBg ?? "#6c63ff")}22;`)}><span class="text-8xl select-none">${escape_html(product.emoji)}</span></div>`);
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`<img src="/duck.svg"${attr("alt", product.name)} class="h-full w-full object-contain p-8 opacity-30 transition-transform duration-700 group-hover:scale-110"/>`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--> <div class="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> <span${attr_class(`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-sm ${stringify(badgeClass)}`)}>${escape_html(product.category)}</span> `);
    if (product.isNew) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="absolute right-3 top-3 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-white shadow-sm">Novo</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex flex-col flex-1 p-5"><h3 class="mb-2 text-lg font-bold text-card-foreground transition-colors group-hover:text-primary line-clamp-2">${escape_html(product.name)}</h3> <p class="mb-4 line-clamp-2 text-sm leading-relaxed text-muted-foreground">${escape_html(product.description)}</p> <div class="flex-1"></div> <div class="flex items-center justify-between"><span class="text-2xl font-bold bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">${escape_html(formatPrice(product.price))}</span> `);
    if (!product.inStock) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<span class="rounded-full px-3 py-1 text-xs font-medium" style="background: hsl(0 100% 71% / 0.12); color: hsl(0 100% 71%);">Esgotado</span>`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></div></a> <div class="border-t border-border/50 p-4"><button${attr("disabled", !product.inStock, true)}${attr_class(`group/btn relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98] ${stringify("bg-linear-to-r from-primary to-primary/90 shadow-primary/20 hover:shadow-primary/30")}`)}><div class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full"></div> `);
    ShoppingCart($$renderer2, {
      size: 16,
      weight: "duotone",
      class: "relative z-10 transition-transform duration-300 group-hover/btn:rotate-12"
    });
    $$renderer2.push(`<!----> <span class="relative z-10">`);
    if (!product.inStock) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`Indisponível`);
    } else {
      $$renderer2.push("<!--[!-->");
      {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push(`Adicionar ao Carrinho`);
      }
      $$renderer2.push(`<!--]-->`);
    }
    $$renderer2.push(`<!--]--></span></button></div> <button class="absolute right-3 bottom-18 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-110 active:scale-95" aria-label="Adicionar aos favoritos">`);
    Heart($$renderer2, {
      size: 18,
      weight: "regular",
      class: `transition-all duration-300 ${stringify("text-gray-500")}`
    });
    $$renderer2.push(`<!----></button></div>`);
  });
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const featured = products.filter((p) => p.inStock).slice(0, 6);
    const categories = [
      {
        name: "Tech & Geek",
        emoji: "💻",
        color: "from-blue-500/20 to-indigo-500/20",
        border: "border-blue-200",
        badge: "bg-blue-100 text-blue-700",
        desc: "Para developers e geeks"
      },
      {
        name: "Personagens",
        emoji: "🧙",
        color: "from-violet-500/20 to-purple-500/20",
        border: "border-violet-200",
        badge: "bg-violet-100 text-violet-700",
        desc: "Ícones pop culture"
      },
      {
        name: "Animais",
        emoji: "🐝",
        color: "from-emerald-500/20 to-teal-500/20",
        border: "border-emerald-200",
        badge: "bg-emerald-100 text-emerald-700",
        desc: "O reino animal"
      },
      {
        name: "Festividades",
        emoji: "🎄",
        color: "from-orange-500/20 to-amber-500/20",
        border: "border-orange-200",
        badge: "bg-orange-100 text-orange-700",
        desc: "Edições sazonais"
      },
      {
        name: "Portugal",
        emoji: "🇵🇹",
        color: "from-red-500/20 to-rose-500/20",
        border: "border-red-200",
        badge: "bg-red-100 text-red-700",
        desc: "Orgulhosamente PT"
      }
    ].map((c) => ({
      ...c,
      count: products.filter((p) => p.category === c.name).length
    }));
    head("1uha8ag", $$renderer2, ($$renderer3) => {
      $$renderer3.title(($$renderer4) => {
        $$renderer4.push(`<title>Duck Shop | Patos de Borracha Temáticos | Porto, Portugal</title>`);
      });
      $$renderer3.push(`<meta name="description" content="A maior coleção de patos de borracha temáticos de Portugal. Tech ducks, personagens famosos, edições Portugal e muito mais. Envio para todo o mundo. Porto, Portugal." class="svelte-1uha8ag"/>`);
    });
    $$renderer2.push(`<section class="relative overflow-hidden border-b border-border/40 bg-gradient-to-br from-background via-primary/5 to-accent/5 svelte-1uha8ag"><div class="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] svelte-1uha8ag"></div> <div class="container relative mx-auto px-4 py-20 md:py-36 svelte-1uha8ag"><div class="mx-auto max-w-4xl text-center svelte-1uha8ag"><div class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm animate-slide-down svelte-1uha8ag"><span class="text-base svelte-1uha8ag">🦆</span> <span class="svelte-1uha8ag">Novidades toda semana · Porto, Portugal</span></div> <h1 class="mb-6 text-balance text-5xl font-extrabold tracking-tight md:text-7xl svelte-1uha8ag" style="font-family: 'Plus Jakarta Sans', sans-serif;"><span class="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient svelte-1uha8ag">Encontra o pato</span> <br class="svelte-1uha8ag"/> <span class="text-foreground svelte-1uha8ag">que fala contigo.</span></h1> <p class="mb-10 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl max-w-2xl mx-auto svelte-1uha8ag">Patos de borracha com personalidade. Para developers, coleccionadores e quem quer uma lembrança de Portugal diferente.</p> <div class="flex flex-col items-center justify-center gap-4 sm:flex-row svelte-1uha8ag"><a href="/produtos" class="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 active:scale-95 svelte-1uha8ag"><span class="svelte-1uha8ag">Ver Catálogo</span> `);
    ArrowRight($$renderer2, {
      size: 20,
      weight: "bold",
      class: "transition-transform duration-300 group-hover:translate-x-1"
    });
    $$renderer2.push(`<!----></a> <a href="/produtos?novo=true" class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-border bg-background/60 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/5 hover:scale-105 active:scale-95 svelte-1uha8ag">Novidades da Semana</a></div></div></div> <div class="border-t border-border/40 bg-background/60 backdrop-blur-sm svelte-1uha8ag"><div class="container mx-auto px-4 py-8 svelte-1uha8ag"><div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 svelte-1uha8ag"><div class="flex items-center gap-3 svelte-1uha8ag"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary svelte-1uha8ag">`);
    Package($$renderer2, { size: 24, weight: "duotone" });
    $$renderer2.push(`<!----></div> <div class="svelte-1uha8ag"><h3 class="font-semibold text-sm svelte-1uha8ag">Envio para PT e BR</h3> <p class="text-xs text-muted-foreground svelte-1uha8ag">Entrega em 3–5 dias úteis</p></div></div> <div class="flex items-center gap-3 svelte-1uha8ag"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent svelte-1uha8ag">`);
    ShieldCheck($$renderer2, { size: 24, weight: "duotone" });
    $$renderer2.push(`<!----></div> <div class="svelte-1uha8ag"><h3 class="font-semibold text-sm svelte-1uha8ag">Compra 100% Segura</h3> <p class="text-xs text-muted-foreground svelte-1uha8ag">Pagamento encriptado</p></div></div> <div class="flex items-center gap-3 svelte-1uha8ag"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 svelte-1uha8ag">`);
    Recycle($$renderer2, { size: 24, weight: "duotone" });
    $$renderer2.push(`<!----></div> <div class="svelte-1uha8ag"><h3 class="font-semibold text-sm svelte-1uha8ag">Embalagem Sustentável</h3> <p class="text-xs text-muted-foreground svelte-1uha8ag">Caixas recicladas com surpresa</p></div></div> <div class="flex items-center gap-3 svelte-1uha8ag"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-100 text-orange-600 svelte-1uha8ag">`);
    Smiley($$renderer2, { size: 24, weight: "duotone" });
    $$renderer2.push(`<!----></div> <div class="svelte-1uha8ag"><h3 class="font-semibold text-sm svelte-1uha8ag">Garantia Quack</h3> <p class="text-xs text-muted-foreground svelte-1uha8ag">Não gostou? 30 dias para devolver</p></div></div></div></div></div></section> <section class="py-20 svelte-1uha8ag"><div class="container mx-auto px-4 svelte-1uha8ag"><div class="mb-12 text-center svelte-1uha8ag"><h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl svelte-1uha8ag" style="font-family: 'Plus Jakarta Sans', sans-serif;">Patos em Destaque</h2> <p class="text-lg text-muted-foreground svelte-1uha8ag">Selecionados especialmente para ti</p></div> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 svelte-1uha8ag"><!--[-->`);
    const each_array = ensure_array_like(featured);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let product = each_array[$$index];
      Product_card($$renderer2, { product });
    }
    $$renderer2.push(`<!--]--></div> <div class="mt-12 text-center svelte-1uha8ag"><a href="/produtos" class="group inline-flex items-center gap-2 rounded-xl border-2 border-primary/30 bg-primary/5 px-8 py-3 font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/30 hover:scale-105 svelte-1uha8ag">Ver todos os patos `);
    ArrowRight($$renderer2, {
      size: 18,
      weight: "bold",
      class: "transition-transform group-hover:translate-x-1"
    });
    $$renderer2.push(`<!----></a></div></div></section> <section class="border-t border-border/40 py-20 svelte-1uha8ag"><div class="container mx-auto px-4 svelte-1uha8ag"><div class="mb-10 flex items-end justify-between svelte-1uha8ag"><div class="svelte-1uha8ag"><h2 class="text-3xl font-bold tracking-tight md:text-4xl svelte-1uha8ag" style="font-family: 'Plus Jakarta Sans', sans-serif;">Explora por categoria</h2> <p class="mt-2 text-muted-foreground svelte-1uha8ag">Cada categoria, um universo diferente.</p></div> <a href="/produtos" class="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4 svelte-1uha8ag">Ver todos `);
    ArrowRight($$renderer2, { size: 14, weight: "bold" });
    $$renderer2.push(`<!----></a></div> <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 svelte-1uha8ag"><!--[-->`);
    const each_array_1 = ensure_array_like(categories);
    for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
      let cat = each_array_1[$$index_1];
      $$renderer2.push(`<a${attr("href", `/produtos?categoria=${encodeURIComponent(cat.name)}`)}${attr_class(`group flex flex-col items-center gap-3 rounded-2xl border bg-gradient-to-br p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${stringify(cat.border)} ${stringify(cat.color)}`, "svelte-1uha8ag")}><span class="text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 svelte-1uha8ag">${escape_html(cat.emoji)}</span> <div class="svelte-1uha8ag"><p class="font-bold text-sm text-foreground svelte-1uha8ag">${escape_html(cat.name)}</p> <p class="text-xs text-muted-foreground mt-0.5 svelte-1uha8ag">${escape_html(cat.desc)}</p></div> <span${attr_class(`rounded-full px-2.5 py-0.5 text-xs font-semibold ${stringify(cat.badge)}`, "svelte-1uha8ag")}>${escape_html(cat.count)} patos</span></a>`);
    }
    $$renderer2.push(`<!--]--></div></div></section> <section class="border-t border-border/40 bg-gradient-to-br from-muted/30 to-background py-20 svelte-1uha8ag"><div class="container mx-auto px-4 svelte-1uha8ag"><div class="mb-12 text-center svelte-1uha8ag"><h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl svelte-1uha8ag" style="font-family: 'Plus Jakarta Sans', sans-serif;">Porquê a Duck Shop?</h2> <p class="text-lg text-muted-foreground max-w-xl mx-auto svelte-1uha8ag">Não somos uma loja de brinquedos. Somos uma loja de personalidades.</p></div> <div class="grid gap-8 md:grid-cols-3 svelte-1uha8ag"><div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 svelte-1uha8ag"><div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary svelte-1uha8ag">`);
    Code($$renderer2, { size: 28, weight: "duotone" });
    $$renderer2.push(`<!----></div> <h3 class="mb-3 text-xl font-bold svelte-1uha8ag">Para developers</h3> <p class="leading-relaxed text-muted-foreground svelte-1uha8ag">O rubber duck debugging é real. Ter um pato do lado resolve bugs. Acreditamos nisso com toda a seriedade — e com muito bom humor.</p></div> <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 svelte-1uha8ag"><div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent svelte-1uha8ag">`);
    Tag($$renderer2, { size: 28, weight: "duotone" });
    $$renderer2.push(`<!----></div> <h3 class="mb-3 text-xl font-bold svelte-1uha8ag">Para coleccionadores</h3> <p class="leading-relaxed text-muted-foreground svelte-1uha8ag">Cada edição é limitada. Cada pato, único. A tua prateleira merece mais personalidade do que uma fileira de patinhos amarelos genéricos.</p></div> <div class="rounded-2xl border border-border/50 bg-card p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 svelte-1uha8ag"><div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-red-600 svelte-1uha8ag">`);
    UsersThree($$renderer2, { size: 28, weight: "duotone" });
    $$renderer2.push(`<!----></div> <h3 class="mb-3 text-xl font-bold svelte-1uha8ag">Para turistas</h3> <p class="leading-relaxed text-muted-foreground svelte-1uha8ag">Leva um bocado do Porto contigo. Os nossos patos Portugal são a lembrança que ninguém esperava — e toda a gente quer.</p></div></div></div></section>`);
  });
}
export {
  _page as default
};
